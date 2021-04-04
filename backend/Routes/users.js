const express = require("express");
const { authenticateToken } = require("../middlewares/auth");
const { User } = require("../models/user");

const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dikl8liky',
  api_key: '191584656973489',
  api_secret: 'YlJpmHXZvRod6wYSf6pt39Cep8A'
});

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
  return users;
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (err) {
    console.log(err)
  }

});

router.post("/upload/profile_pic", authenticateToken, multipartMiddleware, async (req, res) => {

    try {
      const user = await User.findById(req.user.id);

      // Use uploader.upload API to upload image to cloudinary server.
      cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        function (result) {

          // If user had a previous image, remove it from the cloudinary server
          if (user.image && user.image.id) cloudinary.uploader.destroy(user.image.id)

          // Create a new image sub-document
          user.image = {
            id: result.public_id, // image id on cloudinary server
            url: result.url, // image url on cloudinary server
          };

          user.save().then(result => {
            res.send(result)
          })
        });
    } catch (err) {
      res.status(500).send({err: err})
    }
});


module.exports = router;
