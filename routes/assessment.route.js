const express = require("express");
const route = express.Router()
const { addAssessment, getAssessmentList, assessmentById, deleteAssessments, updateAssessmentDetails  } = require("../controller/assessment.controller")
route.post("/",addAssessment);//add new
route.get("/",getAssessmentList);//list of
route.get("/:id",assessmentById);//by id
route.post("/delete",deleteAssessments);//for delete
route.put("/update",updateAssessmentDetails);//for update


module.exports = route;