const express = require("express");
const cors = require("cors");

const routerCourse = require("./routes/course.route");

const app = express();

app.use(cores());
app.use(express.json());

app.use("/course", routerCourse);

module.exports = app;
