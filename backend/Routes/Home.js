const express = require("express");
const { User } = require("../models/user");
const { getJWT } = require("../utils/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  res.sendFile(path.join("..", __dirname, "build", "index.html"));
});

router.post("/api/login", async(req, res) => {
  try {
    console.log('req.body.usernamee :>> ', req.body.username);
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(404);
      return res.json({ err: "Invalid username." });
    }
    const valid = await user.isValidPassword(req.body.password);
    if (valid) {
      const jwt = getJWT(user._id);
      res.json({ msg: "Login successful!", jwt: jwt, id: user._id });
    } else {
      res.status(404)
      res.json({ err: "Invalid password." });
    }
  } catch (err) {
    console.log('err :>> ', err);
    res.status(400);
    res.json(err);
  }
});

router.post("/api/signup", async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  try {
    const newUser = await user.save();
    const jwt = getJWT(newUser._id);
    res.json({ msg: "Account succesfully created!", jwt: jwt, id: newUser._id });
  } catch (err) {
    console.log('err :>> ', err);
    req.status(400);
    res.json({ err: "Error creating account." })
  }
});

module.exports = router;
