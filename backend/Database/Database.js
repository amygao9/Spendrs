const mongoose = require("mongoose");

const uri =
  "mongodb+srv://CSC309:MUPn0ND5xDti3fEx@cluster0.3qb0n.mongodb.net/CSC309?retryWrites=true&w=majority";

function connect() {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

function disconnect() {
  return mongoose.disconnect();
}

module.exports = { connect, disconnect };
