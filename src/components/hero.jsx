// src/components/HeaderAndHero.js
import React from 'react';
// Replace with your actual image path or an external URL

const Hero = () => {
  return (
    <header className="w-full bg-white">
      {/* Navbar Section */}
      <nav className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-gray-800">
          TailGrids
        </div>

        {/* Nav Links (hidden on small screens, shown on md and up) */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-600">
          <li>
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">
              Review
            </a>
          </li>
        </ul>

        {/* Auth Buttons (Sign In / Sign Up) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-500 transition-colors">
            Sign In
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle (hamburger) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-50 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-10 px-4 md:px-8">
          {/* Left Text Content */}
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Find a Best Hospital <br className="hidden sm:block" />
              That changes life.
            </h1>
            <p className="text-gray-700 mb-6 max-w-md">
              that changes life. Find a Best Hospital that changes life. Find a Best Hospital that changes life. Find a Best Hospital that changes life.
            </p>

            {/* Search Bar */}
            <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
              <input
                type="text"
                placeholder="symptoms"
                className="w-full sm:w-auto flex-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Hospital Location"
                className="w-full sm:w-auto flex-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-colors w-full sm:w-auto"
              >
                Search
              </button>
            </form>
            <p className="text-sm text-gray-500">
              Try Product Designer, Software Engineer etc.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">

          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
