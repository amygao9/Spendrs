const express = require("express");
const { User } = require("../models/user");
const { getJWT } = require("../utils/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
  return users;
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});



module.exports = router;
