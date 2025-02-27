import React, { useState, useEffect } from 'react';
import { Input, Button } from "@material-tailwind/react";

export function Manage() {
    const [activeTab, setActiveTab] = useState('online'); // 'online' or 'seat'
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Dummy data for online consultations (replace with your actual data)
    const onlineRequests = [
        {
            id: 1,
            patientName: "John Doe",
            doctorName: "Dr. Sarah Wilson",
            department: "Cardiology",
            time: "10:00 AM",
            status: "Pending"
        },
        {
            id: 2,
            patientName: "Jane Smith",
            doctorName: "Dr. Michael Brown",
            department: "Neurology",
            time: "11:30 AM",
            status: "Pending"
        },
        {
            id: 3,
            patientName: "Sabbir",
            doctorName: "Dr. Michael Brown",
            department: "Neurology",
            time: "11:30 AM",
            status: "Pending"
        },

        // Add more requests as needed
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
                <div className='flex items-center gap-4'>
                    <button className='p-2 hover:bg-gray-100 rounded-full'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className='text-2xl font-medium'>Admin Dashboard</h1>
                </div>
                <div className='relative'>
                    <button 
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className='w-10 h-10 rounded-full overflow-hidden hover:bg-gray-100 p-0.5 focus:outline-none profile-menu cursor-pointer'
                    >
                        <img 
                            src="/path-to-your-admin-image.jpg" 
                            alt="Admin"
                            className='w-full h-full rounded-full object-cover'
                        />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {showProfileMenu && (
                        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 py-4 profile-dropdown'>
                            <div className='flex flex-col items-center justify-center px-6 pb-4 border-b'>
                                <img 
                                    src="/path-to-your-admin-image.jpg"
                                    alt="Admin"
                                    className='w-24 h-24 border rounded-full mb-4 cursor-pointer'
                                />
                                <h3 className='text-xl mb-1'>Hi, SABBIR!</h3>
                            </div>
                            <div className='flex justify-center items-center border-b'>
                                <button 
                                    className='flex items-center justify-center gap-2 p-4 hover:bg-gray-50 transition-colors w-full cursor-pointer'
                                    onClick={() => {/* Handle sign out */}}
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
                <div className='w-60 bg-white h-screen p-4 border-r'>
                    <div className='flex flex-col gap-2'>
                        <button
                            onClick={() => setActiveTab('online')}
                            className={`p-3 rounded-lg text-left ${activeTab === 'online' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                        >
                            Online Consultations
                        </button>
                        <button
                            onClick={() => setActiveTab('seat')}
                            className={`p-3 rounded-lg text-left ${activeTab === 'seat' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                        >
                            Seat Management
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className='flex-1 p-6'>
                    {activeTab === 'online' && (
                        <div className='space-y-4'>
                            <h2 className='text-2xl font-medium mb-6'>Online Consultation Requests</h2>

                            {/* Consultation Request Cards */}
                            {onlineRequests.map((request) => (
                                <div key={request.id} className='bg-white rounded-lg shadow p-4 flex justify-between items-center'>
                                    <div className='space-y-2'>
                                        <div className='flex items-center gap-4'>
                                            <h3 className='text-lg font-medium'>{request.patientName}</h3>
                                            <span className='text-gray-500'>•</span>
                                            <p className='text-gray-600'>{request.doctorName}</p>
                                        </div>
                                        <div className='flex gap-4 text-sm text-gray-600'>
                                            <p>Department: {request.department}</p>
                                            <p>Time: {request.time}</p>
                                            <p>Status: {request.status}</p>
                                        </div>
                                    </div>
                                    <Button
                                        color="blue"
                                        className='ml-4'
                                    >
                                        Assign Room
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'seat' && (
                        <div>
                            <h2 className='text-2xl font-medium mb-6'>Seat Management</h2>
                            <table className='w-full border-collapse border border-gray-300'>
                                <thead>
                                    <tr className='bg-gray-100'>
                                        <th className='border border-gray-300 p-2'>Seat</th>
                                        <th className='border border-gray-300 p-2'>Name</th>
                                        <th className='border border-gray-300 p-2'>Time</th>
                                        <th className='border border-gray-300 p-2'>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Example rows - you can make this dynamic */}
                                    <tr>
                                        <td className='border border-gray-300 p-2'>D01</td>
                                        <td className='border border-gray-300 p-2'>John Doe</td>
                                        <td className='border border-gray-300 p-2'>10:00 AM</td>
                                        <td className='border border-gray-300 p-2'>Paid</td>
                                    </tr>
                                    <tr>
                                        <td className='border border-gray-300 p-2'>D02</td>
                                        <td className='border border-gray-300 p-2'>Jane Smith</td>
                                        <td className='border border-gray-300 p-2'>11:00 AM</td>
                                        <td className='border border-gray-300 p-2'>Pending</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>

                            <div>
                                <h3 className='text-xl font-bold mt-4'>Actions</h3>
                                <div className='flex gap-2 mt-2'>
                                    <div>
                                        <Input
                                            id="email"
                                            color="gray"
                                            size="lg"
                                            type="email"
                                            name="email"
                                            placeholder="name@mail.com"
                                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                        />
                                    </div>
                                    <Button color='blue'>Add Seat</Button>
                                    <Button color='red'>Remove Seat</Button>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h3 className='text-xl font-bold mb-2'>Online Status</h3>
                                <div className='flex gap-2'>
                                    <span className='inline-block w-3 h-3 bg-green-500 rounded-full'></span>
                                    <span>Active Users: 3</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Manage;