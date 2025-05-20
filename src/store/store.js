import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slices/taskSlice.js"
import authReducer from "../slices/authSlice.js"
const store = configureStore ({
    reducer:{
        task: taskReducer,
        auth: authReducer
    }
})

export default store;