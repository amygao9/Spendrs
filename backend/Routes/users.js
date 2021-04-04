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

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
  return users;
});

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (err) {
    console.log(err);
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

router.post("/follow", multipartMiddleware, async (req, res) => {
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

router.post("/unfollow", multipartMiddleware, async (req, res) => {
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

module.exports = router;
