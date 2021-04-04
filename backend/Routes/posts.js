const express = require("express");
const { Post } = require("../models/post");
const { User } = require("../models/user");
const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
// TODO: GLOBAL CLOUDINARY AND MULTIPART VARIABLE
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dikl8liky',
  api_key: '191584656973489',
  api_secret: 'YlJpmHXZvRod6wYSf6pt39Cep8A'
});

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
//     attachedImage: file [optional],
//     description: string [optional],
//     price: int
router.post("/", multipartMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id);
    const file = req.files.file
    const body = req.body
    console.log(file, body)
    body.user = user
    // console.log(req.body)

    // If body includes attachedImage file, parse it to an image sub-document first
    if (file) {
      cloudinary.uploader.upload(
        file.path, // req.files contains uploaded files
        async function (result) {
          // Create a new image sub-document
          body.attachedImage = {
            id: result.public_id, // image id on cloudinary server
            url: result.url, // image url on cloudinary server
          };
          const post = new Post(body);
          const createdPost = await post.save();
          user.posts.push(createdPost);
          await user.save()
          res.send(createdPost);
        });
    }

  } catch (err) {
    console.log('err :>> ', err);
    res.status(400);
    res.send({ err: err });
  }
});

// router.post("/:postId/attach_image", authenticateToken, multipartMiddleware, async (req, res) => {
//
//   try {
//     const user = await Post.findById(req.postId);
//     console.log(req.files)
//
//     // Use uploader.upload API to upload image to cloudinary server.
//     cloudinary.uploader.upload(
//       req.files.image.path, // req.files contains uploaded files
//       function (result) {
//
//         // If user had a previous image, remove it from the cloudinary server
//         if (user.image && user.image.id) cloudinary.uploader.destroy(user.image.id)
//
//         // Create a new image sub-document
//         user.image = {
//           id: result.public_id, // image id on cloudinary server
//           url: result.url, // image url on cloudinary server
//         };
//
//         user.save().then(result => {
//           res.send(result)
//         })
//       });
//   } catch (err) {
//     res.status(500).send({err: err})
//   }
// });

module.exports = router;
