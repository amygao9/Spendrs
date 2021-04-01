const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name can't be blank"],
		minlegth: 1,
		trim: true
	},
	email: {
    type: String,
    required: [true, "Email can't be blank"],
    unique: true
    // match: [/\S+@\S+\.\S+/, 'Email invalid']
  },
	username: {
    type: String,
    required: [true, "Username can't be blank"],
    unique: true
  },
	password: {
		type: String,
		required: [true, "Password can't be blank"],
		trim: true
	},
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  image: String,
  description: String
});

userSchema.pre("save", async function() {
  if (this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
})

userSchema.methods.isValidPassword = async function(password) {
  const valid = await bcrypt.compare(password, this.password);
  return valid;
}

const User = mongoose.model('User', userSchema);

module.exports = { User };