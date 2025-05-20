import React from 'react'

const History = () => {
  return (
    <div className='flex-1 border-gray-300 border-5 rounded-2xl justify-center gap-4 items-start p-2.5 flex-col w-full'>
      <h1 className="taskHistory font-bold text-2xl  ">Completed Tasks:</h1>
      <div className="completedTasks flex-1 h-full flex-col justify-center items-center mt-2 p-2 overflow-auto border-t-1 border-black "></div>
    </div>
  )
}

export default History
