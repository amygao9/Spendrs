const express = require("express");
const { Post } = require("../models/post");
const { User } = require("../models/user");
const router = express.Router();

router.get("/all", async (req, res) => {
  const users = await Post.find();
  res.send(users);
  return users;
});

// Gets all posts of a user
// THIS IS NOT SECURE AND SHOULD BE REMOVED AFTER DEBUGGING
router.get("/", async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
  res.send(posts);
});

// creates a new post for a user.
// req body must look like this:
//     itemName: string,
//     itemLink: string [optional],
//     itemCategory: string [optional],
//     attachedImage: string [optional],
//     description: string [optional],
//     price: int
router.post("/", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id);
    req.body.user = user
    // console.log(req.body)
    const post = new Post(req.body);
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
