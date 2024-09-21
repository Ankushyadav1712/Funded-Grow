import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(27,26,26)] p-4 sticky top-0 z-50 border-b-2 border-black mb-1">
      <div className="container mx-auto flex justify-between items-center mb-1">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Funded{" "}
          <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
            Grow
          </span>
        </div>

        {/* Menu items - hidden on mobile */}
        <div className="hidden lg:flex space-x-8 text-white">
          <Link
            to="/"
            className="hover:text-emerald-500 text-gray-600 no-underline transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-emerald-500 text-gray-600 no-underline transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="hover:text-emerald-500 text-gray-600 no-underline transition duration-300 ease-in-out"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="hover:text-emerald-500 text-gray-600 no-underline transition duration-300 ease-in-out"
          >
            Support
          </Link>
        </div>

        {/* Button on large screens */}
        <div className="hidden lg:flex space-x-4 animated-buttons-container">
          <Link
            className="btn-animated bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded shadow-animation no-underline"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="btn-animated bg-emerald-500 hover:bg-emerald-700 text-white py-2 px-4 rounded shadow-animation no-underline"
            to="/register"
          >
            Register
          </Link>
        </div>

        {/* Hamburger menu - visible on mobile */}


        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - visible when isOpen is true */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden bg-gray-800 text-white py-2`}
      >
        <Link
          to="/"
          className="block px-4 py-2 hover:bg-emerald-500 no-underline text-gray-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 hover:bg-emerald-500 no-underline text-gray-600 "
        >
          About
        </Link>
        <Link
          to="/pricing"
          className="block px-4 py-2 hover:bg-emerald-500 no-underline text-gray-600"
        >
          Pricing
        </Link>
        <Link
          to='/support'
          className="block px-4 py-2 hover:bg-emerald-500 no-underline text-gray-600"
        >
          Support
        </Link>
        <div className="py-2 px-4 sm:px-8 flex flex-col sm:flex-row sm:gap-4">
          <Link
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-500 text-white py-2 rounded mb-2 sm:mb-0 sm:mr-2 text-center no-underline"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-500 text-white py-2 rounded text-center no-underline"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
