const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name can't be blank"],
      minlegth: 1,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email can't be blank"],
      unique: true,
      // match: [/\S+@\S+\.\S+/, 'Email invalid']
    },
    username: {
      type: String,
      required: [true, "Username can't be blank"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password can't be blank"],
      trim: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    image: {
      id: String,
      url: String,
    },
    description: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    register_date: Date,
    privacy: {
      type: String,
      default: "Private",
    }, 
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
});

userSchema.methods.isValidPassword = async function (password) {
  const valid = await bcrypt.compare(password, this.password);
  return valid;
};

userSchema.methods.encryptPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
