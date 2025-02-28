import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import UserProfileModal from './UserProfileModal';

export function Header2() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className={isModalOpen ? "blurred" : ""}>
            <header className="absolute top-0 left-0 pr-4 pl-4 w-full z-50">
                <nav className="container mx-auto flex items-center justify-between gap-30 py-6 px-4 md:px-8">
                    <div className='w-3/6 justify-between items-center flex'>
                        {/* Logo or Brand Name */}
                        <div className="text-2xl font-bold text-gray-800">
                            MediSeat
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
                                <a href="#review" className="hover:text-blue-500 transition-colors">
                                    Review
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/6 flex justify-end items-center text-right">
                        {/* Auth Buttons (Sign In / Sign Up) */}
                        <div className="md:flex items-center space-x-4">
                            <div 
                                className="w-10 h-10 rounded-full border border-black flex items-center justify-center cursor-pointer"
                                onClick={toggleModal}
                            >
                                <img src={'https://randomuser.me/api/portraits/men/1.jpg'} alt="Profile" className="w-full h-full rounded-full" />
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu Toggle (hamburger) */}
                </nav>
                {isModalOpen && <UserProfileModal toggleModal={toggleModal} />}
            </header>
        </div>
    )
}

export default Header2;