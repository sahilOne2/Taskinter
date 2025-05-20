import React from 'react'

const AddTask = () => {
  return (
    <div className='flex-1 border-gray-300 border-5 rounded-2xl justify-center gap-4 h-fit items-start p-2.5 flex-col w-full'>
        <label htmlFor="addTask" className='text-2xl font-bold'>Add a New Task:</label>
        <div className="addNewTaskDiv flex flex-row gap-4 border-t-1 pt-5 pb-5 mt-2 border-black">
            <input type="text" id="addTask" placeholder='Enter Task Name' className='text-lg rounded-3xl border-2 p-2 w-full border-gray-500'/>
            <button className='p-2 rounded-3xl font-semibold bg-purple-500 text-white'>Add</button>
        </div>
    </div>
  )
}

export default AddTask
