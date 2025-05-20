import React, { useEffect } from 'react'
import YourTasks from './yourTasks.jsx'
import AddTask from './addTask.jsx'
import History from './history.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../slices/taskSlice.js'
const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const user = useSelector(state => state.auth.user)
  const tasks = useSelector(state => state.task)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    !isLoggedIn && navigate("/auth")
  }, [isLoggedIn])
  useEffect(async () => {
    const res = await fetch("/taskOpr/fetch-tasks",{
      method:"POST",
      headers:{
          'Content-type':'application/json'
        },
      body: JSON.stringify({name:user})
    })
    const result = await res.json()
    if(result.tasks.length === 0){
      return;
    }
    tasks.noTasks = false
    result.tasks.forEach(element => {
      dispatch(addTask(element))
    });

  }, [])
  useEffect(async() => {
    const res = await fetch("/taskOpr/updateTasks",
      {
        method: "POST",
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify({tasks:tasks})
      }
    )
    const result = await res.json()
    console.log(result.message)
  }, [tasks])
  


  return (
    <div>
      <main className="main flex flex-col justify-center items-center h-screen">
        <div className="sections grid gap-5 grid-cols-2 w-2/3 justify-self-center mb-5 mt-5 h-full">
          <YourTasks />
          <div className="grid grid-rows-[auto_1fr] h-full gap-5  w-full">
            <AddTask />
            <History />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
