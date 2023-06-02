import { useState } from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="text-white text-xl font-semibold">
                        Movie App
                    </div>
                    <div className="md:hidden">
                        <button
                            className="focus:outline-none focus:text-white"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } md:block md:flex space-x-4`}
                    >
                        <a href="#" className="text-white hover:text-blue-500">Home</a>
                        <a href="#" className="text-white hover:text-blue-500">Movies</a>
                        <a href="#" className="text-white hover:text-blue-500">TV Shows</a>
                        <a href="#" className="text-white hover:text-blue-500">Favorites</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;