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
      res.send(users);
      return users;
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error")
    }
    
  });

router.delete("/deleteUser/:username", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({username: req.params.username});
    if (!user) {
      res.status(400).send({err: "User not found"});
    } else {
      res.send(user);
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send()
  }
  
});

  module.exports = router;