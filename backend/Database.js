const mongoose = require('mongoose');
const uri =
  'mongodb+srv://TestUser:hello123@cluster0.9hbkq.mongodb.net/<dbname>?retryWrites=true&w=majority';

function connect () {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

function disconnect () {
  return mongoose.disconnect();
}

module.exports = { connect, disconnect };
