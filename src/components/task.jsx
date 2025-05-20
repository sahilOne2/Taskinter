import React from 'react'
import edit from '../assets/edit.svg'
import deleteIcon from '../assets/deleteIcon.svg'
const Task = () => {
    return (
        <div className="task flex flex-row justify-between items-center p-3 border-1 border-black rounded-2xl w-full ">
            <div className="taskCheckBox relative flex flex-row gap-2">
                <input type="checkbox" id="taskCheck" title='Mark as Finished' className="taskCheck text-black" />
                <p className="taskName text-black"></p>
            </div>

            <div className="taskOps flex flex-row gap-4">
                <button className="editTaskBtn bg-purple-500 font-bold rounded-3xl p-2 text-white"><img src={edit} alt="" className='editImg h-6 invert-100' /></button>
                <button  className="deleteTaskBtn bg-red-500 font-bold rounded-3xl p-2 text-white"><img src={deleteIcon} alt="" className='deleteImg h-6 invert-100' /></button>
            </div>
        </div>
    )
}

export default Task

