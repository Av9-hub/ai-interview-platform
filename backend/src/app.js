const express=require("express");
const app=express();
const authRouter=require("./routes/authRouter")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Backend running ");
});
app.use("/",authRouter);

module.exports=app;