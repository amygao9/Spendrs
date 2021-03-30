const express = require("express");
const { Post } = require("../models/post");
const { User } = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Post.find();
  res.send(users);
  return users;
});

// Gets all posts of a user
router.get("/:userId", async (req, res) => {
  const posts = await Post.find({ user: req.params.userId });
  res.send(posts);
});

// creates a new post for a user
router.post("/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId);
    const post = new Post(req.body);
    post.user = user;
    const createdPost = await post.save();
    user.posts.push(createdPost);
    await user.save()
    res.send(createdPost);
  } catch (err) {
    console.log('err :>> ', err);
    res.status(400);
    res.send({ err: err });
  }
});


module.exports = router;
