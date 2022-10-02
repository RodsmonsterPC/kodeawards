const express = require("express");
const { body } = require("express-validator");

const {
  create,
  allCourses,
  getCourseId,
  eraseCourse,
  courseUpdate,
} = require("../useCase/courses.useCase");

const router = express.Router();

router.get("/", allCourses);

router.get("/:id", getCourseId);

router.delete("/:id", async (request, response) => {
  const { params } = request;
  try {
    const course = await eraseCourse(params.id);
    response.status(201);
    response.json({
      succes: true,
    });
  } catch (error) {
    response.json(400);
    response.json({
      succes: false,
      message: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  const { body, courseId } = request;
  try {
    const course = await create(body, courseId);
    response.status(201);
    response.json({
      succes: true,
      data: {
        course,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      succes: false,
      message: error.message,
    });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { params } = request;
    const { body } = request;

    const course = await update(params.id, body, { returnDocuemnt: "after" });
    response.status(201);
    response.json({
      succes: true,
      data: {
        course,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      succes: false,
      message: error.message,
    });
  }
});
module.exports = router;
