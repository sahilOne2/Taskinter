import mongoose  from "mongoose";

const user = new mongoose.Schema({
    name:{type:String,required:true},
    email: {type:String, required:true},
    passwordHash: { type:String, required:true},
    tasks: {type:Array}
}) 

export const User = mongoose.model('User',user)