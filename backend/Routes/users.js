const express = require("express");
const { authenticateToken } = require("../middlewares/auth");
const { User } = require("../Database/Models/user");

const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dikl8liky",
  api_key: "191584656973489",
  api_secret: "YlJpmHXZvRod6wYSf6pt39Cep8A",
});

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("posts")
      .populate({
        path: "posts",
        populate: {
          path: "user",
          select: "name username",
        },
      })
      .populate("followers", "name username")
      .populate("following", "name username");
    if (!user) {
      res.status(400).send("User not found");
    }
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }
});

router.get("/following/:username", async (req, res) => {
  try {
    const followedUser = await User.findOne({ username: req.params.username });
    if (!followedUser) {
      res.status(400).send("User not found");
    }
    let following = false;
    if (followedUser.followers.indexOf(req.user.id) > -1) {
      following = true;
    }
    res.send({ following: following });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }
});

router.post("/upload/profile_pic", multipartMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    console.log(req.files);

    // Use uploader.upload API to upload image to cloudinary server.
    cloudinary.uploader.upload(
      req.files.image.path, // req.files contains uploaded files
      function (result) {
        // If user had a previous image, remove it from the cloudinary server
        if (user.image && user.image.id)
          cloudinary.uploader.destroy(user.image.id);

        // Create a new image sub-document
        user.image = {
          id: result.public_id, // image id on cloudinary server
          url: result.url, // image url on cloudinary server
        };

        user.save().then((result) => {
          res.send(result);
        });
      }
    );
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.post("/follow", async (req, res) => {
  try {
    const users = await User.find({ _id: { $in: [req.body.id, req.user.id] } });

    if (users.length != 2) {
      res.status(400).send("user you want to follow does not exist");
    }

    const following = users[0].id == req.body.id ? users[0] : users[1];
    const follower = users[0].id == req.body.id ? users[1] : users[0];

    if (follower.following.includes(req.body.id)) {
      res.status(400).send("User is already followed");
      return;
    }

    follower.following.push(following.id);
    following.followers.push(follower.id);

    await follower.save();
    await following.save();

    res.send(follower);
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.post("/unfollow", async (req, res) => {
  try {
    const follow_status = await User.updateOne(
      { _id: req.body.id },
      { $pullAll: { followers: [req.user.id] } }
    );
    const following_status = await User.updateOne(
      { _id: req.user.id },
      { $pullAll: { following: [req.body.id] } }
    );

    res.send("Successfully unfollowed");
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.get("/findUser/:search", async (req, res) => {
  try {
    const users = await User.find({
      username: { $regex: `.*${req.params.search}.*` },
    }).limit(3);
    res.send(users.map((val) => val.username));
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.put("/update", async (req, res) => {
  try {
    const username = req.body.username;
    if (username) {
      const existingUser = User.findOne({ username: username });
      if (existingUser && existingUser._id != req.user.id) {
        res.status(400).send({ err: "Username already in use." });
      }
    }
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    }).populate("posts");
    if (!user) {
      res.status(500).send({ err: "Error saving user." });
    }
    res.send(user);
  } catch (err) {
    console.log("err :>> ", err);
    res.status(500).send({ err: err });
  }
});

/* Route for changing privacy
Request body expects:
{
	"privacy": <string> (one of "Public", "Private", "Friends Only")
}
*/
router.patch("/changePrivacy", async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    user.privacy = req.body.privacy;

    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

router.delete("/deleteUser", async (req, res) => {
  try {
    const id = req.user.id;

    const user = await User.findByIdAndRemove(id);
    if (!user) {
      res.status(404).send();
    } else {
      res.send(user);
    }
  } catch (err) {
    console.log(error);
    res.status(500).send(); // server error, could not delete.
  }
});

/* Route for changing password
Request body expects:
{
	{oldPass: "", password: "", confirmPass: "", passwordStrength: ""}
}
*/
router.patch("/changePassword", async (req, res) => {
  let errors = "";
  if (req.body.password != req.body.confirmPass)
    errors += "Password confirmation must match Password.\n";

  if (req.body.password.length < 1)
    errors += "Password field cannot be empty.\n";
  // // password strength
  // if (req.body.password.length > 0 && req.body.passwordStrength < 2)
  //   errors += "Password cannot be too short or weak.\n";

  // report the error, without the trailing \n
  if (errors) return res.status(400).json({ err: errors });

  try {
    const id = req.user.id;
    const user = await User.findById(id);
    const valid = await user.isValidPassword(req.body.oldPass);
    if (!valid) {
      res.status(404);
      res.json({ err: "Invalid password." });
    } else {
      // set new password
      user.password = await user.encryptPassword(req.body.password);
      await user.save();
      res.send(user);
    }
  } catch (err) {
    console.log(error);
    res.status(500).send(); // server error, could not delete.
  }
});

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .populate("posts")
      .populate('followers', 'name username')
      .populate('following', 'name username');
    if (!user) {
      res.status(400).send({ err: "User not found" });
    }
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
