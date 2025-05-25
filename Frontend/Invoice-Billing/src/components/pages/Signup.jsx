import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        {/* Form Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>

        {/* Signup Form */}
        <form className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          {/* Repeat Password */}
          <div>
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;