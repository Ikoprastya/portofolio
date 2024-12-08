import React, { useState, useEffect  } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";


const Header = () => {
    const location = useLocation(); // Untuk mendapatkan path saat ini
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // Tutup menu setiap kali lokasi (route) berubah
    useEffect(() => {
      setIsOpen(false);
    }, [location]);

    
    
    return (
        <header className="flex justify-between items-center py-6 px-4 md:px-12 ">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
                <img
                    src={logo} // Menggunakan path dari import
                    alt="Logo"
                    className="h-10 md:h-16 w-auto rounded-[100%]"
                />
            </Link>
          </div>
    
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/allproject" 
            className={({ isActive }) =>
              isActive || location.pathname.startsWith("/projects")
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 font-semibold"
            }>
              All Project
            </NavLink>
          </nav>
    
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
              <nav className="flex flex-col space-y-4 py-4 px-6">
                <NavLink
                  to="/allproject"
                  className={({ isActive }) =>
                    isActive || location.pathname.startsWith("/projects")
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-red-600 font-semibold"
                  }
                  onClick={() => setIsOpen(false)} // Tutup menu saat klik
                >
                  All Project
                </NavLink>
              </nav>
            </div>
          )}


          
        </header>

        
      );
};

export default Header;
