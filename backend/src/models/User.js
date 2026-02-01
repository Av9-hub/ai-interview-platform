const mongoose=require("mongoose")
const validator=require("validator")


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"FirstName is required"],
        trim:true,
        minLength:[2,"FirstName must be at least 2 character"],
        maxLength:[30,"FirstName can't exceed 50 character"],
        validate(val){
            if(!validator.isAlpha(val)){
                throw new Error("Should be alphabet")
            }
        }
    },
    lastName:{
        type:String,
        required:[true,"LastName is required"],
        trim:true,
        minLength:[2,"LastName must be at least 2 character"],
        maxLength:[30,"LastName can't exceed 50 character"],
        validate(val){
            if(!validator.isAlpha(val)){
                throw new Error("Should be alphabet")
            }
        }
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true,
        trime:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Email is required");
            }
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Must be atleast 6 characters"],
        select:false,
        validate(val){
            if(!validator.isStrongPassword(val,{
                minLength:6,
                minLowercase:1,
                minUppercase:1,
                minNumbers:1,
                minSymbols:0
            })){
                throw new Error( "Password must contain at least 1 uppercase, 1 lowercase, and 1 number")
            }
        }
    },

    role:{
        type:String,
        enum:{
            values:["candidate","hr","admin"],
            message:"Role must be candidate, hr, admin"
        },
        default:"candidate"
    },

    profile:{
        avatar:{
            type:String,
            validate(val){
                if(!validator.isURL(val)){
                    throw new Error("Avatar must be image URL")
                }
            }
        },

        resume:{
            type:String,
            validate(val){
                if(!validator.isURL(val)){
                    throw new Error("Avatar must be image URL")
                }
            }
        },
        phone:{
            type:String,
            select:false,
            validate(val){
                if(!validator.isMobileNumber(val)){
                    throw new Error("Please provide a valid phone number");
                }
            }
        },
        bio:{
            type:String,
            maxLength:[200,"Bio can't exceed 200 character."],
            trim:true
        },
        age:{
            type:String,
            validate(val){
                if(!validator.isInt(val,{
                    minNumbers:16,
                })){
                    throw new Error("Age must be Interger and greater than 16")
                }
            }
        },
        address:{
            State:{
                type:String,
            },
            City:{
                type:String,
            },
            Locality:{
                type:String,
            },
            select:false,
        },
        isActive:{
            type:Boolean,
            default:true
        },
        lastLogin:{
            type:Date,
        }
    }

},{timestamps:true})

module.exports=mongoose.model("User",userSchema);