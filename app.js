const express = require("express");
const app = express();
const cors = require("cors");
// const helmet = require("helmet")
const morgan = require("morgan")
//for cross origin 
app.use(cors());
//for api level logging
app.use(morgan());
//for header related security
// app.use(helmet());
//to parse json data sent into the request body
app.use(express.json("ITS WORKING FINE"));//middileware
//parse array or object from request url
app.use(express.urlencoded());//middileware

app.use("/v1", require("./routes"))

app.listen(3000, (err)=>{
    if(err)
    {
        console.log("Error in running server",e);
    }else{
        console.log("Server is running on port ", 3000);
    }
})