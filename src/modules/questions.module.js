const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  answerChosen: {
    type: String,
    required: true,
  },

  unitTest: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("question", questionSchema);
