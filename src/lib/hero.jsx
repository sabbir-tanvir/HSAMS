import React from "react";
import heroImage from '../assets/m.png';
import GradientText from './GradientText';
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


import { useState } from "react";


export function Hero() {
    const [bookingType, setBookingType] = useState(null)
    const navigate = useNavigate();
    

    const hospitalInfo = {
        name: "City General Hospital",
        address: "123 Healthcare Avenue",
        phone: "(555) 123-4567",
        email: "info@citygeneralhospital.com",
        description: "Providing quality healthcare services since 1990. Our hospital is equipped with state-of-the-art facilities and experienced medical professionals.",
        services: [
            "24/7 Emergency Care",
            "General Surgery",
            "Cardiology",
            "Pediatrics",
            "Orthopedics"
        ]
    }

    const OfflineBookingForm = ({ toggleModal }) => (
        <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 backdrop-blur-xs " onClick={toggleModal}>
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Offline Appointment Booking</h3>
                    <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 transition">
                        <FaTimes size={24} />
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Patient Name</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input type="tel" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Preferred Date</label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Department</label>
                        <select className="w-full p-2 border rounded">
                            <option>General Medicine</option>
                            <option>Cardiology</option>
                            <option>Orthopedics</option>
                            <option>Pediatrics</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Doctors</label>
                        <select className="w-full p-2 border rounded">
                            <option id="">Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    )

    const OnlineBookingForm = ({ toggleModal }) => (
        <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 backdrop-blur-xs" onClick={toggleModal}>
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Online Consultation Booking</h3>
                    <button onClick={toggleModal} className="text-gray-400 hover:text-gray-600 transition">
                        <FaTimes size={24} />
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Patient Name</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input type="tel" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Preferred Date & Time</label>
                        <input type="datetime-local" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Department</label>
                        <select className="w-full p-2 border rounded">
                            <option>General Medicine</option>
                            <option>Cardiology</option>
                            <option>Orthopedics</option>
                            <option>Pediatrics</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Doctors</label>
                        <select className="w-full p-2 border rounded">
                            <option>Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                            <option>Dr.Sabbir Tanvir</option>
                        </select>
                    </div>

                    <button type="submit" onClick={() => navigate('../payment')} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Pay and Book Consultation
                    </button>
                </form>
            </div>
        </div>
    )

    const toggleModal = () => setBookingType(null);

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

                    <div className={` ${bookingType ? 'overflow-hidden' : ''}`}>
                        <div className="max-auto  mx-auto">
                            {/* Modal Forms */}
                            {bookingType === 'offline' && <OfflineBookingForm toggleModal={toggleModal} />}
                            {bookingType === 'online' && <OnlineBookingForm toggleModal={toggleModal} />}

                            {/* Hospital Info Card */}
                            <div className="bg-white pb-4 pl-4 pr-4 rounded-lg border-black border-solid shadow-xl">
                                <h2 className="text-2xl font-bold mb-1">{hospitalInfo.name}</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-3 justify-center">
                                        <h3 className="font-bold ">Contact Information:</h3>
                                        <p>Address: {hospitalInfo.address}</p>
                                    </div>

                                    <div className="flex gap-4 ">
                                        <button
                                            onClick={() => setBookingType('online')}
                                            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                        >
                                            Online Booking
                                        </button>
                                        <button
                                            onClick={() => setBookingType('offline')}
                                            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                                        >
                                            Offline Booking
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
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