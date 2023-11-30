import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login({ getUser, fetchOrderDetails }){

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    try {
      await axios.post('/login', { email, password })
      e.target.reset()
      getUser()
      fetchOrderDetails()
      history.push("/profile")
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
    
  return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <div className="mb-10 text-center">
          <img
            alt=""
            className="h-14 w-14 mx-auto"
            src="https://i.ibb.co/NLZncjH/image.png"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to your account</h2>
          <p className="text-sm text-gray-600 mt-2"> Don't have an account?{' '} <NavLink to="/register" className="text-darkPinky">Register</NavLink></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="text" name="email" className="mt-1 p-2 w-full border rounded-md " />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div>
            <button type="submit" className="w-full p-2 bg-darkPinky text-white rounded-md hover:bg-zinc-700"> Submit </button>
          </div>
        </form>
      </div>
  )
}

export default Login