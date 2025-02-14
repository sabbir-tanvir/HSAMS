import React, { use } from 'react';
import { Header } from '../lib/header';
import { Hero } from '../lib/hero';
import { Footer } from '../lib/footer';

const Home = () => {
    return (
        <div className="relative bg-white min-h-screen overflow-hidden">
            <Header />
            <div className="hidden md:block absolute top-0 right-0 w-3/6 h-screen bg-blue-600 rounded-tl-[150px] z-0" />

            <div className="h-screen">
                <Hero />
            </div>
            <div className="  items-end">
                <Footer />
            </div>

        </div>
    );
};
export default Home;
