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
  categories: {
    content: {
      subcategories: {
        bad: {
          type: Number,
        },
        enough: {
          type: Number,
        },
        excellent: {
          type: Number,
        },
      },
    },
  },
  explanations: {
    subcategories: {
      bad: {
        type: Number,
      },
      enough: {
        type: Number,
      },
      excellent: {
        type: Number,
      },
    },
  },
  knowledge: {
    subcategories: {
      bad: {
        type: Number,
      },
      enough: {
        type: Number,
      },
      excellent: {
        type: Number,
      },
    },
  },
  subscribeStudent: {
    type: Number,
  },

  units: [
    {
      unitName: {
        type: String,
      },
      components: [
        {
          type: String,
        },
      ],
      unitTest: {
        type: String,
      },
    },
  ],

  courseId: {
    type: String,
  },
  minatureImage: {
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
