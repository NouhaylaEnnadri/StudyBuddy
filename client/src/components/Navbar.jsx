import React, { useState } from "react";
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { logo } from "../assets";
import DarkLight from "./DarkLight";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 pt-6 mb-12">
      {" "}
      {/* Fixed Navbar */}
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Left: Logo (hidden when search is active on mobile) */}
        {!isSearchVisible && (
          <div className="flex items-center space-x-4">
            <a href="/" className="font-bold text-primary">
              <img src={logo} alt="logo" className="h-20" />
            </a>
          </div>
        )}

        {/* Middle: Search Bar (only one search bar visible at a time) */}
        {isSearchVisible ? (
          <div className="flex justify-center items-center w-full px-4 mt-2 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/2 px-4 py-2 border rounded-md border-secondary"
            />
            <button
              onClick={() => setIsSearchVisible(false)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-primary"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-secondary w-full mx-2"
            />
          </div>
        )}

        {/* Right: Log In, Register, Profile (hidden when search is active on mobile) */}
        {!isSearchVisible && (
          <div className="flex items-center space-x-4">
            {/* Search Icon (visible on mobile, hidden when search is active) */}
            <button
              onClick={() => setIsSearchVisible(true)}
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <FiSearch className="w-6 h-6" />
            </button>
            {/* Burger Menu for Mobile */}
            <button
              onClick={() => setIsMenuVisible(!isMenuVisible)}
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuVisible ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
            {/* Log In, Register, Profile (hidden on mobile, shown in burger menu) */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-secondary bg-opacity-15 text-base-content px-4 py-2 rounded-md hover:bg-secondary hover:bg-opacity-30 transition-colors"
              >
                Log In
              </Link>
              <Link
            
                to="/register"
                className="text-secondary border border-secondary rounded-md px-4 py-2 hover:text-accent"
              >
                Register
              
              
              </Link>
             
              <DarkLight />

              <a
                href="/profile"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-secondary hover:border-primary transition-colors"
              >
                <FiUser className="w-6 h-6 text-secondary" />
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Burger Menu Items (shown when burger menu is clicked) */}
      {isMenuVisible && !isSearchVisible && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Add other routes here */}
          </Routes>
          <a href="/register" className="text-secondary hover:text-primary">
            Register
          </a>
          <a href="/profile" className="text-secondary hover:text-primary">
            Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
