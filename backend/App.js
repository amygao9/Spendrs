const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());

// so we can read json
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "build")));

// to simply display home page could be used to deploy react web page later
const home = require("./Routes/Home");
app.use("/", home);

const helloWorld = require("./Routes/HelloWorld");
app.use("/HelloWorld", helloWorld);

module.exports = app;
