import { Router } from "express";
import bcrypt from "bcryptjs"
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.configDotenv()
const authRoute = Router()

const SECRET = 'ATDdgeGT5Vuwk57Eh6NlQyhVN9MZAiJso7mbZhpqJagyUYwpcVH0yDHJ64Ja/Xf+FF4kdzXubXN/MF07m3bhPQ==';
authRoute.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        const user = new User({ name, email, passwordHash });
        await user.save();
        res.status(201).json({ message: "Signed Up successfully." })
    } catch (err) {
        res.status(401).json({ message: "Error Singing Up" })
        console.error("Error Singing Up", err)
    }
})
authRoute.post("/login",async (req, res) => {
    res.clearCookie('token');
    const { email, password } = req.body;
    const user = await User.findOne({ email: email })
    if (!user) {
        res.status(404).json({ message: "No User Found." })
        return;
    }
    if (!bcrypt.compareSync(password, user.passwordHash)) {
        res.status(401).json({ message: "Wrong Password." })
        return;
    }
    const name = user.name
    const token = jwt.sign({name}, SECRET, { expiresIn: "720h" })
    const ONE_MONTH = 1 * 30 * 24 * 60 * 60 * 100
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: new Date(Date.now() + ONE_MONTH)
    })
    res.status(201).json({message:"Logged in successfully.",user:name})
})

export default authRoute;