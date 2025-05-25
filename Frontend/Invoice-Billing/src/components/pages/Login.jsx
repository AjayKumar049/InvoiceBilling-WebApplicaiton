import React from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {/* Signup Form */}
        <form className="space-y-4">
          
          

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          {/* Submit Button */}
          
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Link to='/dashboard'>Login</Link>
          </button>
          
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Looking to create an account?{' '}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

 