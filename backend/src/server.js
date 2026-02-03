const dotenv=require("dotenv")
dotenv.config();

const app=require("./app")
const connectDB=require("../src/config/database")
const PORT=5000;

connectDB()
    .then(()=>{
        console.log("Connected to database");
        app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    });
    })
    .catch((error)=>{
        console.log(error,"Failed to connect with Database");
    })
