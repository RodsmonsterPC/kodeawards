const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  stars: {
    type: Boolean,
    require: true,
  },

  subscribeStudent: {
    type: Number,
  },

  units: {
    course: {
      type: String,
    },
    unitName: {
      type: String,
    },
    components: {
      type: String,
    },
    unitTest: {
      type: String,
    },
  },
  courseId: {
    type: String,
  },
  minuatureImage: {
    type: String,
    require: true,
  },
  bannerImage: {
    type: String,
    require: true,
  },
  courseDescription: {
    type: String,
    require: true,
  },
  themeTag: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("course", courseSchema);
