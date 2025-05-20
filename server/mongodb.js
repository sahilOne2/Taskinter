import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
// const mongoUri = process.env.MONGO_URI
// console.log(mongoUri);

const connectDB = async (mongoUri) => {
    try{
        await mongoose.connect(mongoUri)
        console.log("Connected");
        
    }catch(err){
        console.log("Error Connecting to Database",err);        
    }
}
export default connectDB;