import { createSlice } from "@reduxjs/toolkit";

 const initialState= {
    tasks:[],
    noTasks:true
 }
 const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state,action) {
            state.push(action.payload)
        },
        deleteTask(state,action){
            state.filter(item => item.id !== action.payload.id)
        },
        updateFinished(state,action) {
            const item = state.find(item => item.id === action.payload.id)
            if(item){
                item.finished = !item.finished
            }
        },

    }
 })
 export const {addTask,deleteTask,updateFinished} = taskSlice.actions;
 export default taskSlice.reducer;