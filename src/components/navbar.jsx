import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import logout from "../slices/authSlice.js"
const Navbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className='p-2 navbar bg-purple-500 w-full flex justify-around'>
      <p className='text-white font-bold text-2xl '>Taskinter</p>
      <ul className=' text-white font-semibold flex row gap-4 items-center'>
        {!isLoggedIn &&
          <>
            <NavLink to="/sign-up" className={({ isActive }) => isActive ? "underline" : ""}>Sign Up</NavLink>
            <NavLink to="/log-in" className={({ isActive }) => isActive ? "underline" : ""}>Log In</NavLink>
          </>
        }
        {isLoggedIn &&
          <NavLink to="/log-out" onClick={handleLogout} className={({ isActive }) => isActive ? "underline" : ""}>Log Out</NavLink>
        }
      </ul>
    </div>
  )
}

export default Navbar
