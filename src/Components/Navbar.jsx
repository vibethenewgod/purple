import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        <div className="text-red-600 text-2xl font-bold cursor-pointer">
          PURPLE
        </div>
      </div>

      {/* Right side: Desktop Nav Links */}
      <ul className="hidden tablet:flex space-x-10 text-xl text-black font-semibold uppercase">
        <li className="relative text-black-600 cursor-pointer transition-colors duration-200 hover: group">
          <a href="#new">New</a>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
        </li>
        <li className="relative text-black cursor-pointer transition-colors duration-200 hover:text-black group">
          <a href="#men">Men</a>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
        </li>
        <li className="relative text-gray-600 cursor-pointer transition-colors duration-200 hover:text-black group">
          <a href="#women">Women</a>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
        </li>
        <li className="relative text-gray-600 cursor-pointer transition-colors duration-200 hover:text-black group">
          <a href="#kids">KIDS</a>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
        </li>
        <li className="relative text-gray-600 cursor-pointer transition-colors duration-200 hover:text-black group">
          <a href="#sale">ABOUT</a>
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
        </li>
      </ul>

      {/* Right side: Search, Login, Cart, and Hamburger Icon */}
      <div className="flex items-center space-x-4 laptop:space-x-6">
        {/* Search Box (only visible on laptop and up) */}
        <div className="hidden laptop:flex relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 pr-10 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition duration-200"
          />
          <FaSearch className="absolute right-3 text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>

        {/* Login / Join */}
        <a href="#"><button className="text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2 ">
         <FaUser className="text-gray-500" />
          <span className="hidden tablet:inline">Log in | Join</span>
          </button></a>

        {/* Cart Icon */}
        <div className="relative text-gray-600 hover:text-gray-900 transition duration-200 cursor-pointer">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
            0
          </span>
        </div>

        {/* Hamburger Icon (only visible on mobile) */}
        <button className="tablet:hidden text-gray-600" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Sidebar for mobile view */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10 flex justify-end tablet:hidden">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col space-y-4 uppercase">
            <button className="self-end text-gray-600" onClick={toggleSidebar}>
              <FaTimes className="text-2xl" />
            </button>
            <ul className="flex flex-col space-y-6 text-black font-medium">
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#new">New</a>
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#men">Men</a>
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#women">Women</a>
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#kids">Kids</a>
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                <a href="#sale">Sale</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
