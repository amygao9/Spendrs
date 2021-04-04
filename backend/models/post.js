const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Post must have a user"]
  },
  itemName: {
    type: String,
    required: [true, "Item can't be blank"]
  },
  itemLink: String,
  itemCategory: {
    type: String,
    default: 'misc'
  },
  attachedImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  },
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