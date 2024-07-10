const express=require("express");
const dotenv=require("dotenv").config();
const app=express();
const port= process.env.port||5000;
app.use("/home",require("./routs/router"));
app.listen(port,()=>{
    console.log('Server running in port',port);
});
