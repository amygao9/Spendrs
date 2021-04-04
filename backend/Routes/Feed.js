const express = require("express");
const { User } = require("../Database/Models/user");
const { Post } = require("../Database/Models/post");

const router = express.Router();

/*
 * gets the news feed for the user starting at <date>
 *
 * date: [optional] isoString defaults to time when called if not specified
 * num: [optional] the max num of news feed elements to pull default 50
 *
 * return values:
 * date: isoString for the last post
 * posts: array of posts
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

    console.log(timeStamp.toISOString());

    const limit = req.body.num === undefined ? 50 : req.body.num;

    const user = await User.findById(req.user.id);

    const posts = await Post.find({
      user: { $in: user.following },
      createdAt: { $gte: timeStamp },
    })
      .sort({
        createdAt: 1,
      })
      .limit(limit);

    res.send(posts);
  } catch (err) {
    res.status(500).send({ err: err });
  }
});

module.exports = router;
