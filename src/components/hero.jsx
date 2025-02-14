// src/components/Hero.js
import React, { use } from 'react';
// If you have an image, you can import it:
import heroImage from '../assets/m.png';

import { Header } from '../lib/header';

const Hero = () => {


    return (
        <div className="relative bg-white min-h-screen overflow-hidden">
            {/* 
        Right-side curved shape 
        (hidden on small screens, visible on md+)
      */}
            <div className="hidden md:block absolute top-0 right-0 w-3/6 h-full bg-blue-600 rounded-tl-[150px] z-0" />

            {/* ========================
          HEADER (Floating)
      =========================*/}

            <Header />


            {/* ========================
          HERO SECTION
      =========================*/}
            {/* 
        We add top padding to push content below the fixed header.
      */}
            <main className="relative z-10 pt-24">
                <section className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 px-4 md:px-8">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col w-5/6   text-center justify-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Find a Best Hospital <br className="hidden sm:block" />
                            That changes life.
                        </h1>
                        <p className="text-gray-700  mb-6 sm:mb-8">
                            Find a Best Hospital that changes life. Explore our listings
                            to find specialized treatments, patient reviews, and
                            more near you.
                        </p>

                        {/* Search Bar */}
                        <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                            <input
                                type="text"
                                placeholder="Symptoms"
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

                    </div>

                    {/* Right Column: Image or Placeholder */}
                    <div className="flex justify-center  items-center md:mt-0">

                        <img src={heroImage} alt="Hero" className="w-[600px] h-auto" />

                        <div className="text-center text-blue-700 font-semibold">

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Hero;
