import React, { useState } from "react";
import { Link } from "react-router-dom";
// const { userName } = useUser();

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu text-gray-600 hover:text-emerald-500";
  const activeMenuClass = "menu selected text-emerald-500 font-bold";

  return (
    <nav className="col-8">
      <div>
        <div className="container mx-auto flex justify-between items-center col-12">
          {/* Logo */}
          <div className="text-black text-2xl font-bold col-4">
            Funded{" "}
            <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
              Grow
            </span>
          </div>
          <div className="col-4"></div>

          {/* Menu items */}
          <div className="lg:flex space-x-8 col-8 ">
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
          <div className="lg:flex items-center space-x-4 ">
            <div
              className="profile flex items-center mt-4"
              
            >
            <div className="avatar bg-white text-black px-3 py-2 rounded-full mr-2 mt-2 border text-5xl">
                F<span className="text-green-500">G</span>
              </div>
              <p className="username mt-1 text-9xl" onClick={handleProfileClick}>Ankush </p>
            </div>
            {isProfileDropdownOpen && (
              <div className="fixed right-4 mt-5 -mb-12 -mr-12 bg-white border border-black rounded shadow-lg p-4">
                <ul className="">
                  <li>Profile</li>
                  <li>email</li>
                </ul>
                <div className="mt-4 gap-3">  
                <div className="col-12 gap-2">   
                <button onClick={handleProfileClick} className="col-4 ">Close</button>
                <Link to='/' className="no-underline text-black border border-black p-2 rounded ml-1">Log Out</Link>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
