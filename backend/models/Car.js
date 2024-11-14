const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Link each car to a user
  },
  title: {
    type: String,
    required: true, // Car title is mandatory
  },
  description: {
    type: String,
    required: true, // Car description is mandatory
  },
  tags: {
    type: [String], // Tags as an array of strings (e.g., "SUV, Luxury")
  },
  images: {
    type: [String], // Store image file paths as an array of strings
  },
});

module.exports = mongoose.model("Car", CarSchema);
