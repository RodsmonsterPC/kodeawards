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
  },
  bannerImage: {
    type: string,
  },
  courseDescription: {
    type: string,
  },
  themeTag: {
    type: string,
  },
});

module.exports = mongoose.model("course", courseSchema);
