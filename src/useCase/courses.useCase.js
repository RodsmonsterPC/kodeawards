const Course = require("../modules/courses.modules");

const create = (courseData, courseId) => {
  courseData.courseId = courseId;
  const course = Course.create(courseData);
  return course;
};

const allCourses = async (request, response) => {
  const courses = await Course.find();
  response.json({
    courses,
  });
};

const getCourseId = async (request, response) => {
  const { id } = request.params;

  const course = await Course.findById(id);
  response.json({
    course,
  });
};

const eraseCourse = (courseDelete) => {
  const courseErase = Course.findByIdAndDelete(courseDelete);
  return courseErase;
};

const courseUpdate = (courseId, courseBody, courseAfter) => {
  const course = Course.findByIdAndUpdate(courseId, courseBody, courseAfter);
  return course;
};

module.exports = { create, allCourses, getCourseId, eraseCourse, courseUpdate };
