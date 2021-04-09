const express = require("express");
const { authenticateToken } = require("../middlewares/auth");
const { User } = require("../Database/Models/user");

const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

router.get("/allUsers", async (req, res) => {
    try {
      const users = await User.find().populate('posts');
      // for (var user in users) {
      //   user.populate('posts');
      // }
      res.send(users);
      return users;
    } catch (err) {
      console.log(err);
    }
    
  });

  module.exports = router;