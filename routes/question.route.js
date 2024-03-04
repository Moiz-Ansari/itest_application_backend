const express = require("express");
const route = express.Router()
const { addQuestion, getQuestionList, questionById, deleteQuestions, updateQuestion } = require("../controller/question.controller")

route.post("/", addQuestion);//add new
route.get("/",getQuestionList);//list of
route.get("/:id", questionById);//by id
route.post("/delete", deleteQuestions);//for delete
route.put("/update", updateQuestion);//for update


module.exports = route;