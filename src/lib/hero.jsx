import React from "react";
import heroImage from '../assets/m.png';
import GradientText from './GradientText'
import  DayScheduleButton  from '../lib/dayschedule';



export function Hero() {

    return (
        <main className="relative z-10 pt-24">
            <section className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 px-4 md:px-8">
                {/* Left Column: Text Content */}
                <div className="flex flex-col w-5/6   text-center justify-center">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="custom-class"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-4">

                            Find a Best Hospital <br className="hidden sm:block" />
                            That changes life.
                        </h1>

                    </GradientText>

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
                    <div>
                    <DayScheduleButton />

                    </div>

                </div>

                {/* Right Column: Image or Placeholder */}
                <div className="flex justify-center  items-center md:mt-0">

                    <img src={heroImage} alt="Hero" className="w-[600px] h-auto" />

                    <div className="text-center text-blue-700 font-semibold">

                    </div>
                </div>
            </section>
        </main>


    );
};


export default Hero;