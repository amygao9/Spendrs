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

    const limit = req.query.num ? parseInt(req.query.num) : 50;

    const user = await User.findById(req.user.id);

    const posts = await Post.find({
      user: { $in: user.following },
      createdAt: { $lt: timeStamp.toISOString() },
    })
      .sort({
        createdAt: -1,
      })
      .limit(limit)
      .populate({path: 'user', select: 'name image'})
      .populate({path: 'comments',
        populate: {
          path: 'author',
          select: 'name image'
        }
      });

    if (posts.length == 0) {
      res.send({ date: timeStamp, posts: [] });
      return;
    }

    res.send({ date: posts[posts.length - 1].createdAt, posts });
  } catch (err) {
    console.log('err :>> ', err);
    res.status(500).send({ err: err });
  }
});

module.exports = router;
