const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.UseCors((x) =>
  x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed((origin) => true) // allow any origin
    .AllowCredentials()
); // allow credentials

// so we can read json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

const { authenticateToken } = require("./Middlewares/auth");
// to simply display home page could be used to deploy react web page later

app.get(
  [
    "/",
    "/profile",
    "/profile/*",
    "/analytics",
    "/admin",
    "/settings",
    "/dashboard",
  ],
  async (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  }
);

const home = require("./Routes/Home");
app.use("/api", home);

const users = require("./Routes/users");
app.use("/api/users", authenticateToken, users);

const posts = require("./Routes/posts");
app.use("/api/posts", authenticateToken, posts);

const feed = require("./Routes/Feed");
app.use("/api/feed", authenticateToken, feed);

const admin = require("./Routes/admin");
app.use("/api/admin", authenticateToken, admin);

module.exports = app;
