const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post must have a user"],
    },
    itemName: {
      type: String,
      required: [true, "Item can't be blank"],
    },
    itemLink: String,
    itemCategory: {
      type: String,
      default: "misc",
    },
    attachedImage: {
      id: String,
      url: String,
    },
    description: String,
    price: {
      type: Number,
      default: 0,
    },
    likes:[{
      type: String
    }],
    comments: [{
      author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
      comment: String,
    },{ timestamps: true }]
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
