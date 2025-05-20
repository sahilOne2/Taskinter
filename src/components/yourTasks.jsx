import React from 'react'
import { useSelector } from 'react-redux';
import Task from "./task.jsx"

const YourTasks = () => {
  const tasks = useSelector(state => state.task)
  return (
    <div className='flex-1 border-gray-300 border-5 rounded-2xl justify-center items-center p-2.5 flex-col w-full'>
      <h1 className='text-2xl font-bold'>Your Tasks:</h1>
      <div className="tasks flex-1 h-full flex-col justify-center items-center mt-2 p-2 overflow-auto border-t-1 border-black ">
        {tasks.map((item,index) => {
          
        })}
      </div>
    </div>
  )
}

export default YourTasks;
