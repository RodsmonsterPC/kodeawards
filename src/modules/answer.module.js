const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
  },
});

module.exports = mongoose.model("answer", answerSchema);
