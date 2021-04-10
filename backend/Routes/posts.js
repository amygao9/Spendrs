const express = require("express");
const { Post } = require("../Database/Models/post");
const { User } = require("../Database/Models/user");
const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
// TODO: GLOBAL CLOUDINARY AND MULTIPART VARIABLE
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dikl8liky",
  api_key: "191584656973489",
  api_secret: "YlJpmHXZvRod6wYSf6pt39Cep8A",
});

// Gets all posts of a user
router.get("/", async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.send(posts);
});


router.get("/:id", async (req, res) => {
  const posts = await Post.findById(req.params.id);
  res.send(posts);
});

router.delete("/", async (req, res) => {
  try {
    Post.findOne({ _id: req.body.post, user: req.user.id }, function(err, post){
      if (err || post === null) {
        return res.status(404).send({ err: "Post unaccessible." });
      }
      return post.remove(function(err, post){
        if (post.image && post.image.id) {
          cloudinary.uploader.destroy(user.image.id);
        }
        if(!err) {
          return res.send(post);
        }
        res.status(404).send({ err: "Post unaccessible." });
      });                
    });
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

// creates a new post for a user.
// req body must look like this:
//     itemName: string,
//     itemLink: string [optional],
//     itemCategory: string [optional],
//     attachedImage: file [optional],
//     description: string [optional],
//     price: int
router.post("/", multipartMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id);
    const file = req.files ? req.files.file : null;
    const body = req.body;
    body.user = user.id;

    // If body includes attachedImage file, parse it to an image sub-document first
    if (file) {
      cloudinary.uploader.upload(
        file.path, // req.files contains uploaded files
        async function (result) {
          // Create a new image sub-document
          body.attachedImage = {
            id: result.public_id, // image id on cloudinary server
            url: result.url, // image url on cloudinary server
          }
          const post = new Post(body);
          const createdPost = await post.save().then(p => p.populate('user').execPopulate());
          user.posts.push(createdPost);
          await user.save();
          res.send(createdPost);
        }
      );
    }
    else {
      const post = new Post(body);
      const createdPost = await post.save().then(p => p.populate('user').execPopulate());
      user.posts.push(createdPost);
      await user.save();
      res.send(createdPost);
    }
  } catch (err) {
    console.log("err :>> ", err);
    res.status(400);
    res.send({ err: err });
  }
});

router.put("/like", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const post = await Post.findById(req.body.post).populate(
      "comments.author",
      "image.url name"
    );
    const likeIndex = post.likes.indexOf(user.username);
    if (likeIndex > -1) {
      post.likes.splice(likeIndex, 1);
    } else {
      post.likes.push(user.username);
    }
    await post.save().then(p => p.populate('user').execPopulate());
    res.send(post);
  } catch (err) {
    console.log("err :>> ", err);
    res.status(400).send("Error liking picture");
  }
});

/*
Add comment to a post. request body looks like
{comment: ""}
 */
router.post("/:postId/comment", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const post = await Post.findById(req.params.postId).populate(
      "comments.author",
      "image.url name username"
    );
    post.comments.push({
      author: user,
      comment: req.body.comment,
    });
    await post.save().then(p => p.populate('user').execPopulate());
    res.send(post);
  } catch (err) {
    console.log("err :>> ", err);
    res.status(400).send("Error posting comment");
  }
});

/*
Delete comment to a post by commentId
 */
router.delete("/:postId/comment/:commentId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "comments.author",
      "image.url name username"
    );
    const comment = await post.comments.id(req.params.commentId);

    // If not the comment owner, forbidden.
    if (comment.author._id != req.user.id) {
      res.send(403);
      return
    }
    await comment.remove();
    await post.save().then(p => p.populate('user').execPopulate());
    res.send(post);
  } catch (err) {
    console.log("err :>> ", err);
    res.status(400).send("Error deleting comment");
  }
});

module.exports = router;
