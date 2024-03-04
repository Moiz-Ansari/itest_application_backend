const express = require("express");
const route = express.Router();
const questionRoute = require("./question.route")
const testRoute = require("./test.route")
const assessmentRoute = require("./assessment.route")
route.get("/assessment", assessmentRoute);
route.get("/test", testRoute);
route.get("/question",questionRoute);

module.exports =  route;