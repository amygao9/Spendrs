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

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });

  try {
    const newUser = await user.save();
    const jwt = getJWT(newUser._id);
    res.json({ msg: "Account succesfully created!", jwt: jwt });
  } catch (err) {
    console.log('err :>> ', err);
    res.send(400).json({ err: "Error creating account." })
  }
});


module.exports = router;
