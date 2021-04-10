const express = require("express");
const { authenticateToken } = require("../Middlewares/auth");
const { User } = require("../Database/Models/user");

const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

/* Route for getting all user accounts.
Returns all user documents.
*/
router.get("/allUsers", async (req, res) => {
  try {
    const adminUser = await User.findById(req.user.id);
    if (!adminUser.admin) {
      res.sendStatus(403);
      return;
    }
    const users = await User.find().populate("posts");
    res.send(users);
    return users;
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

/* Route for deleting a user by username
Returns the user document deleted.
*/
router.delete("/deleteUser/:username", async (req, res) => {
  try {
    const adminUser = await User.findById(req.user.id);
    if (!adminUser.admin) {
      res.sendStatus(403);
      return;
    }
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (!user) {
      res.status(400).send({ err: "User not found" });
    } else {
      res.send(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
