const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Backend running ");
});

module.exports=app;