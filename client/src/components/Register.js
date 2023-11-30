import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Register(){
    
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const first_name = e.target.first_name.value
    const last_name = e.target.last_name.value
    
    try {
      await axios.post('/register', { email, password, first_name, last_name })
      e.target.reset()
      history.push("/login")
    } catch (error) {
          console.error('Error during registration:', error)
    }
}
    
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Create an account</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700"> First Name: </label>
          <input type="text" name="first_name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-zinc-500" />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700"> Last Name: </label>
          <input type="text" name="last_name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-zinc-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email: </label>
          <input type="text" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-zinc-500" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password: </label>
          <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-zinc-500" />
        </div>
        <div>
          <button type="submit" className="w-full p-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-700 focus:outline-none focus:ring focus:border-zinc-500" > Submit </button>
        </div>
      </form>
    </div>
    
    )
}
    

export default Register