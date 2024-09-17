
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsOpen(false); // Close mobile menu on selection
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = "menu text-gray-600 hover:text-emerald-500";
  const activeMenuClass = "menu selected text-emerald-500 font-bold";

  return (
    <nav className="col-8">
      <div className="container mx-auto flex justify-between items-center col-12">
        {/* Logo */}
        <div className="text-black text-2xl font-bold col-4">
          Funded{" "}
          <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
            Grow
          </span>
        </div>
        <div className="col-4"></div>

        {/* Menu items - hidden on mobile */}
        <div className="hidden lg:flex space-x-8 col-8 ">
          <Link
            to="/summary"
            onClick={() => handleMenuClick(0)}
            className={selectedMenu === 0 ? activeMenuClass : menuClass}
          >
            Dashboard
          </Link>
          <Link
            to="/orders"
            onClick={() => handleMenuClick(1)}
            className={selectedMenu === 1 ? activeMenuClass : menuClass}
          >
            Orders
          </Link>
          <Link
            to="/holding"
            onClick={() => handleMenuClick(2)}
            className={selectedMenu === 2 ? activeMenuClass : menuClass}
          >
            Holdings
          </Link>
          <Link
            to="/positions"
            onClick={() => handleMenuClick(3)}
            className={selectedMenu === 3 ? activeMenuClass : menuClass}
          >
            Positions
          </Link>
          <Link
            to="/funds"
            onClick={() => handleMenuClick(4)}
            className={selectedMenu === 4 ? activeMenuClass : menuClass}
          >
            Funds
          </Link>
        </div>

        {/* Profile */}
        <div className="hidden lg:flex items-center space-x-4 ">
          <div className="profile flex items-center mt-4" onClick={handleProfileClick}>
            <div className="avatar bg-gray-300 text-black px-3 py-2 rounded-full mr-2 mt-2">ZU</div>
            <p className="username mt-1">USERID</p>
          </div>
          {isProfileDropdownOpen && (
            <div className="absolute right-4 mt-2 bg-white border border-gray-200 rounded shadow-lg p-4">
              <p>Profile Options</p>
            </div>
          )}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
            <div className="col-6"></div>
          <button onClick={toggleMenu} className="text-black top-1/2">
            <svg
              className="w-2 h-8 flex  items-center justify-center"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 12"
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

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-gray-800 text-white py-2`}>
        <Link
          to="/summary"
          onClick={() => handleMenuClick(0)}
          className="block px-4 py-2 hover:bg-emerald-500 no-underline"
        >
          Dashboard
        </Link>
        <Link
          to="/orders"
          onClick={() => handleMenuClick(1)}
          className="block px-4 py-2 hover:bg-emerald-500 no-underline"
        >
          Orders
        </Link>
        <Link
          to="/holding"
          onClick={() => handleMenuClick(2)}
          className="block px-4 py-2 hover:bg-emerald-500 no-underline"
        >
          Holdings
        </Link>
        <Link
          to="/positions"
          onClick={() => handleMenuClick(3)}
          className="block px-4 py-2 hover:bg-emerald-500 no-underline"
        >
          Positions
        </Link>
        <Link
          to="/funds"
          onClick={() => handleMenuClick(4)}
          className="block px-4 py-2 hover:bg-emerald-500 no-underline"
        >
          Funds
        </Link>
      </div>
    </nav>
  );
};

export default Menu;



