const express = require("express");
const route = express.Router()
const {  addTest, getTestList, TestDetailById, deleteTestById , updateTest} = require("../controller/test.controller");
route.post("/", addTest);//add new
route.get("/", getTestList);//list of
route.get("/:id",TestDetailById);//by id
route.post("/delete", deleteTestById);//for delete
route.put("/update", updateTest);//for update


module.exports = route;