const express = require("express");
const { authenticateToken } = require("../middlewares/auth");
const { User } = require("../models/user");

const router = express.Router();

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
  return users;
});

router.get("/:id", authenticateToken, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});



module.exports = router;
