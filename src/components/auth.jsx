import React from "react";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 font-exo">
        Welcome to Taskinter
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl">
        Organize your tasks efficiently. Prioritize, track, and complete your goals with ease — all in one place.
      </p>

      <div className="flex gap-6">
        <NavLink
          to="/sign-up"
          className="px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/log-in"
          className="px-6 py-3 border border-purple-700 text-purple-700 rounded-md hover:bg-purple-100 transition"
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default Auth;
