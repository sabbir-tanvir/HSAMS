import React, { useState, useEffect } from 'react';
import Dimage from '../assets/p.jpg'
import { Button } from "@material-tailwind/react";

export function Doctor() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const wardSeats = [
        {
            wardName: "General Ward",
            totalSeats: 50,
            occupied: 35,
            available: 15
        },
        {
            wardName: "ICU",
            totalSeats: 20,
            occupied: 18,
            available: 2
        },
        {
            wardName: "Emergency",
            totalSeats: 30,
            occupied: 22,
            available: 8
        }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.querySelector('.profile-dropdown');
            const profileButton = document.querySelector('.profile-menu');

            if (showProfileMenu &&
                !dropdown?.contains(event.target) &&
                !profileButton?.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showProfileMenu]);

    return (

        <div className='flex flex-col min-h-screen bg-[#f1f3f4]'>
            {/* Top Navigation - Google Classroom style */}
            <nav className='flex items-center justify-between w-full bg-white px-4 py-2 border-b'>
                <div className='flex items-center '>

                    <h1 className='text-2xl font-medium'>Doctor Dashboard</h1>
                </div>
                <div className='relative'>
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className='w-10 h-10 rounded-full overflow-hidden hover:bg-gray-100 p-0.5 focus:outline-none profile-menu cursor-pointer'
                    >
                        <img
                            src={Dimage}
                            alt="Admin"
                            className='w-full h-full rounded-full object-cover'
                        />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {showProfileMenu && (
                        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 py-4 profile-dropdown'>
                            <div className='flex flex-col items-center justify-center px-6 pb-4 border-b'>
                                <img
                                    src={Dimage}
                                    alt="Admin"
                                    className='w-24 h-24 border rounded-full mb-4 cursor-pointer'
                                />
                                <h3 className='text-xl mb-1'>Hi, SABBIR!</h3>
                            </div>
                            <div className='flex justify-center items-center border-b'>
                                <button
                                    className='flex items-center justify-center gap-2 p-4 hover:bg-gray-50 transition-colors w-full cursor-pointer'
                                    onClick={() => {/* Handle sign out */ }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                    </svg>
                                    Sign out
                                </button>
                            </div>
                            <div className='px-4 pt-2 text-xs text-gray-600 flex items-center justify-center gap-2'>
                                <a href="/privacy" className='hover:underline cursor-pointer'>Privacy Policy</a>
                                <span>•</span>
                                <a href="/terms" className='hover:underline cursor-pointer'>Terms of Service</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <div className='flex flex-1'>
                {/* Left Sidebar */}
                <div className='w-60 bg-white min-h-screen p-4 border-r'>
                    {/* Sidebar content */}
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            {wardSeats.map((ward, index) => (
                                <div key={index} className="bg-white rounded-lg shadow p-4">
                                    <h3 className="text-lg font-medium mb-2">{ward.wardName}</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Total Seats:</span>
                                            <span className="font-medium">{ward.totalSeats}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Occupied:</span>
                                            <span className="text-red-500 font-medium">{ward.occupied}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Available:</span>
                                            <span className="text-green-500 font-medium">{ward.available}</span>
                                        </div>
                                        <div className="mt-4">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-blue-500 h-2.5 rounded-full"
                                                    style={{ width: `${(ward.occupied / ward.totalSeats) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <Button color="blue" className="w-full cursor-pointer mt-4">
                                            Manage Seats
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor;