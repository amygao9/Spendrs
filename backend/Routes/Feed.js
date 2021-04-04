const express = require("express");
const { User } = require("../Database/Models/user");

const router = express.Router();

/*
 * gets the news feed for the user starting at <date>
 *
 * date: isoString [optional] defaults to time when called if not specified
 *
 */
router.get("/newsfeed", async (req, res) => {
  try {
    let timeStamp;
    if (req.body.date !== undefined) {
      timeStamp = new Date(req.body.date);
    } else {
      timeStamp = new Date();
    }
    if (timeStamp == "Invalid Date") {
      res.status(400).send("Invalid Date");
      return;
    }

    console.log(req.user);
    res.send("OK");
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

module.exports = router;
