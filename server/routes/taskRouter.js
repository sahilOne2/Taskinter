import { Router } from "express";
import User from "../models/userModel.js"

const taskRoute = Router();

taskRoute.post("/fetch-tasks",async (req,res) => {
    const user = await User.findOne({name:req.name})
    const tasks = user.tasks
    res.status(201).json({message:'Fetched tasks successfully.',tasks: tasks})
})
taskRoute.post("/update-tasks",async(req,res) => {
    const user = await User.findOne({name:req.name})
    user.tasks = req.tasks
    res.status(201).json({message:'Updated tasks successfully'})
})

export default taskRoute;