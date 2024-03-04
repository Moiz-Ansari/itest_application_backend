const express = require("express");
const route = express.Router();

route.get("/question",(req, res)=>{
    console.log("api is working");
    return res.send("its working");
})

module.exports =  route;