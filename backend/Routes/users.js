const express = require("express");
const { authenticateToken } = require("../middlewares/auth");
const { User } = require("../models/user");

const router = express.Router();

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



module.exports = router;
