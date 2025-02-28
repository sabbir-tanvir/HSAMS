import React, { useState, useEffect } from 'react';
import Dimage from '../assets/p.jpg'



export function Doctor() {
    const [showProfileMenu, setShowProfileMenu] = useState(false);

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
                    
                </div>
            </div>
        </div>
    )
}

export default Doctor;