import React from 'react';
import { Header } from '../lib/header';
import { Hero } from '../lib/hero';
import { Footer } from '../lib/footer';
import { About } from '../lib/about';
import Canvas from '../lib/canvas'; // Correct import path
import Review from '../lib/review'; // Correct import path


const Home = () => {
    return (
        <div className="relative bg-white min-h-screen ">
            <div className="hidden md:block absolute top-0 right-0 w-3/6 h-screen bg-blue-600 rounded-tl-[150px] z-0" />
            <Header />
            <div className="h-screen">
                <Hero />
            </div>
            <div className="h-screen">
                <Canvas />
                <About />
            </div>
            <div className="h-screen">
                <Review />
            </div>

            <div className="items-end">
                <Footer />
            </div>
        </div>
    );
};
export default Home;
