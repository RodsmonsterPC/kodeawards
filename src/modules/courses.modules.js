const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: string,
    required: true,
  },
  author: {
    type: string,
    require: true,
  },
  stars: {
    type: boolean,
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

  units: {
    course: {
      type: string,
    },
    unitName: {
      type: string,
    },
    components: {
      type: string,
    },
    unitTest: {
      type: string,
    },
  },
  courseId: {
    type: string,
  },
  minuatureImage: {
    type: string,
    require: true,
  },
  bannerImage: {
    type: string,
    require: true,
  },
  courseDescription: {
    type: string,
    require: true,
  },
  themeTag: {
    type: string,
    require: true,
  },
});

module.exports = mongoose.model("course", courseSchema);
