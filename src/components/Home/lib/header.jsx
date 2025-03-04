import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
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
                    <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
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
        </header>
    )
}

export default Header;