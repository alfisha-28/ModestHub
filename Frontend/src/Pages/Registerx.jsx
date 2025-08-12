import React from 'react'
import registerPic from '../assets/register.png'
import logo from '../assets/logo.png'

export default function Register() {
  return (
     <div className="min-h-screen bg-[#e4d4d1] flex flex-col md:flex-row items-center justify-center px-4 py-4 md:py-8 ">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
          <img src={logo} alt="ModestHub Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-[#5a3c35]">MODESTHUB</h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#7a4d41] mb-1">Register</h2>
        <p className="text-[#c28d68] mb-6">Sign up. Join in. Stay Modest.</p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#f8ddbb] placeholder-[#7a4d41] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-[#f8ddbb] placeholder-[#7a4d41] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Set Password"
            className="w-full p-3 rounded-md bg-[#f8ddbb] placeholder-[#7a4d41] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-md bg-[#f8ddbb] placeholder-[#7a4d41] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-[#7a4d41] text-white font-semibold hover:bg-[#5e3a31] transition"
          >
            Register
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-4 text-sm text-[#7a4d41]">
          Already have an Account?{" "}
          <a href="#" className="text-[#c28d68] hover:underline">
            Click here to Login
          </a>
        </p>
      </div>

      {/* Right Section */}
     <div className="flex-1 flex justify-center items-center">
       <img
         src={registerPic}
         alt="Girl Illustration"
         className="w-full h-auto max-w-[600px] md:max-h-screen object-contain"
      />
      </div>
    </div>
  );
}

