import React, { useState, useEffect } from 'react';
import Dimage from '../assets/p.jpg'
import { Button } from "@material-tailwind/react";

export function Doctor() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Dummy data for patient requests
    const patientRequests = [
        {
            id: 1,
            patientName: "John Doe",
            appointmentTime: "10:00 AM",
            timeRemaining: 15, // minutes
            status: "Waiting",
            department: "Cardiology"
        },
        {
            id: 2,
            patientName: "Jane Smith",
            appointmentTime: "10:30 AM",
            timeRemaining: 45,
            status: "Upcoming",
            department: "General Medicine"
        },
        {
            id: 3,
            patientName: "Mike Johnson",
            appointmentTime: "11:00 AM",
            timeRemaining: 75,
            status: "Upcoming",
            department: "Cardiology"
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

    // Function to format the time remaining
    const formatTimeRemaining = (minutes) => {
        if (minutes < 60) {
            return `${minutes} min`;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
    };

    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Waiting':
                return 'text-yellow-500';
            case 'Upcoming':
                return 'text-blue-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className='flex flex-col min-h-screen bg-[#f1f3f4]'>
            {/* Top Navigation - Google Classroom style */}
            <nav className='flex items-center justify-between w-full bg-white px-4 py-2 border-b'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-medium'>Doctor Dashboard</h1>
                </div>
                <div className='relative'>
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className='w-10 h-10 rounded-full overflow-hidden hover:bg-gray-100 p-0.5 focus:outline-none profile-menu cursor-pointer'
                    >
                        <img
                            src={Dimage}
                            alt="Doctor"
                            className='w-full h-full rounded-full object-cover'
                        />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {showProfileMenu && (
                        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 py-4 profile-dropdown'>
                            <div className='flex flex-col items-center justify-center px-6 pb-4 border-b'>
                                <img
                                    src={Dimage}
                                    alt="Doctor"
                                    className='w-24 h-24 border rounded-full mb-4 cursor-pointer'
                                />
                                <h3 className='text-xl mb-1'>Hi, SABBIR!</h3>
                            </div>
                            <div className='flex justify-center items-center border-b'>
                                <button
                                    className='flex items-center justify-center gap-2 p-4 hover:bg-gray-50 transition-colors w-full cursor-pointer'
                                    onClick={() => {/* Handle sign out */}}
                                >
                                    Sign out
                                </button>
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
                <div className="flex-1 p-6">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold mb-4">Today's Patient Requests</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {patientRequests.map((request) => (
                                <div key={request.id} 
                                    className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <h3 className="text-lg font-medium">{request.patientName}</h3>
                                            <span className="text-gray-500">•</span>
                                            <p className="text-gray-600">{request.department}</p>
                                        </div>
                                        <div className="flex gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Appointment:</span>
                                                <span className="font-medium">{request.appointmentTime}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Time Remaining:</span>
                                                <span className="font-medium">{formatTimeRemaining(request.timeRemaining)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Status:</span>
                                                <span className={`font-medium ${getStatusColor(request.status)}`}>
                                                    {request.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">

                                        <Button 
                                            color="green"
                                            className="flex items-center gap-2"
                                            onClick={() => {/* Handle go to room */}}
                                        >
                                            Go to Room
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctor;