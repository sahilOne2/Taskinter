import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import { signup } from "../features/auth/authSlice";   // if you create this action
const serverUrl = "http://localhost:3000"
export default function SignUp() {
  const dispatch  = useDispatch();
  const navigate  = useNavigate();

  // initialize the form
  const {
    register,            // attaches input to RHF
    handleSubmit,
    setError,      // wraps your onSubmit
    formState: { errors,isSubmitting } // validation errors
  } = useForm();

  // what happens after user clicks “Sign Up”
  const onSubmit =async (data) => {
    const res = await fetch(`${serverUrl}/auth/signup`,{
      method: "POST",
      headers:{ 'Content-type':'application/json' },
      body: JSON.stringify(data)
    })
    const result = await res.json()
    if(res.ok){
      if(result.message === "Signed Up successfully."){
        alert(result.message)
        navigate("/log-in")
      }
    }
                // or navigate("/") after auto‑login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-purple-500 mb-6">
          Create your Taskinter account
        </h2>

        {/* RHF handles preventDefault + gathers values for you */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email"
                }
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password field */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" }
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-500 transition"
          >
            {isSubmitting? <img src="../assets/src/loading.svg" alt="loading"/>:"Submit"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <NavLink to="/log-in" className="text-purple-700 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
