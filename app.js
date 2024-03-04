const express = require("express");
const app = express();

app.use("/v1", require("./routes"))

app.use(express.json());//middileware
app.use(express.urlencoded());//middileware


app.listen(3000, (err)=>{
    if(err)
    {
        console.log("Error in running server",e);
    }else{
        console.log("Server is running on port ", 3000);
    }
})