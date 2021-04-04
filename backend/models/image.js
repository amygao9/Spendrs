/* Image mongoose model */
const mongoose = require('mongoose');

// create an image schema
const imageSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// create an image model using the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = { Image };