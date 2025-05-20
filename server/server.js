import dotenv from "dotenv"
dotenv.config()
import express from "express";
import connectDB from "./mongodb.js";
import authRoute from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import taskRoute from "./routes/taskRouter.js";


connectDB("mongodb://localhost:27017/TaskinterDB")

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/auth',authRoute)
app.use('/taskOpr',taskRoute)

app.listen(3000,() => {
    console.log("This server is running on port 3000")
})