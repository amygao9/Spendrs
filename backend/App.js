const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(cors());

// so we can read json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

const { authenticateToken } = require("./middlewares/auth");
// to simply display home page could be used to deploy react web page later
const home = require("./routes/home");
app.use("/api", home);

const users = require("./routes/users");
app.use("/api/users", authenticateToken, users);

const posts = require("./routes/posts");
app.use("/api/posts", authenticateToken, posts);

const feed = require("./routes/Feed");
app.use("/api/feed", authenticateToken, feed);

const helloWorld = require("./routes/helloWorld");
app.use("/helloWorld", helloWorld);

module.exports = app;
