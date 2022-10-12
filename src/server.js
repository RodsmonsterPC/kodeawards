const express = require("express");
const cors = require("cors");

const routerCourse = require("./routes/course.route");
const routerAuth = require("./routes/auth.route");
const routerUser = require("./routes/user.route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/course", routerCourse);
app.use("/auth", routerAuth);
app.use("/users", routerUser);

module.exports = app;
