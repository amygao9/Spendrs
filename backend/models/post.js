const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  item: {
    type: String,
    required: [true, "Item can't be blank"],
  },
  image: String,
  description: String,
  price: {
    type: Number,
    get: getPrice,
    set: setPrice
  }
});

function getPrice(num){
  return (num/100).toFixed(2);
}

function setPrice(num){
  return num*100;
}

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };