const mongoose = require('mongoose');

// creating gratitude schema
const Schema = mongoose.Schema;

const gratitudeSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating the mongoose model
const Gratitude = mongoose.model('Gratitude', gratitudeSchema);

module.exports = Gratitude;
