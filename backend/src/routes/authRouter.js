const express=require("express")
const authRouter=express.Router();
const User=require("../models/User");
const bcrypt=require("bcrypt")
const validator=require("validator")
const jwt=require("jsonwebtoken")

authRouter.post("/signUp",async(req,res)=>{
    const {email,password,firstName,lastName,role}=req.body;
    try{
        if(!firstName||!lastName){
            return res.status(400).json({
                message:"Name is required"
            });
        }
        if(!email||!password){
            return res.status(400).json({
                message:"Email, and password are required"
            });
        }
        const normalizedEmail=email.toLowerCase(); 
        const userExist=await User.findOne({email:normalizedEmail});
        if(userExist){
            return res.status(409).json({message:"Email already registered"})
        }
        if(!validator.isStrongPassword(password,{
                minLength:6,
                minLowercase:1,
                minUppercase:1,
                minNumbers:1,
                minSymbols:0
            })){
                return res.status(400).json({message:"Size> 5 and must contain a-Z & 1-9"})
            }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            firstName,
            lastName,
            email:normalizedEmail,
            password:hashedPassword,
            role
        });
        const jwtToken=jwt.sign(
            {_id:user._id}, process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRY_TIME}
        )
        res.cookie("token",jwtToken,{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite:"strict",
            expires:new Date(Date.now()+24*3600000)
        });
        res.status(201).json({
            message:"User registered successfully",
            user
        })

    }
    catch(error){
        res.status(500).json(error.message);
    }
})



module.exports=authRouter;