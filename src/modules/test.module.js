const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  users: [
    {
      type: String,
      required: true,
    },
  ],
  status: {
    type: String,
    required: true,
  },
  unitTest: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("test", testSchema);
