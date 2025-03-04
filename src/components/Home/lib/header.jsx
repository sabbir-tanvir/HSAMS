import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Add useState import

export function Header() {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
    
    // Toggle function for mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="absolute top-0 left-0 pr-4 pl-4 w-full z-50">
            <nav className="container mx-auto flex items-center justify-between gap-26 py-6 px-4 md:px-8">
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
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={() => navigate('/login')} className="text-white hover:text-black transition-colors">
                            Sign In
                        </button>
                        <button onClick={() => navigate('/register')} className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
                {/* Mobile Menu Toggle (hamburger) */}
                <div className="md:hidden">
                    <button 
                        className="text-gray-600 hover:text-blue-500 focus:outline-none"
                        onClick={toggleMobileMenu} // Add click handler
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMobileMenu}
            >
                {/* Mobile Menu Panel */}
                <div 
                    className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col p-6">
                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button 
                                className="text-gray-600" 
                                onClick={toggleMobileMenu}
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Mobile Auth Buttons */}
                        <div className="mt-8 space-y-4">
                            <button 
                                onClick={() => {
                                    navigate('/login');
                                    toggleMobileMenu();
                                }} 
                                className="w-full text-center py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                            >
                                Sign In
                            </button>
                            <button 
                                onClick={() => {
                                    navigate('/register');
                                    toggleMobileMenu();
                                }} 
                                className="w-full text-center py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition-colors"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;