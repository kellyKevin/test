// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-700 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold">FarmWise</h1>
        {/* Add your logo here if you have one */}
        {/* <img src="/path/to/logo.png" alt="FarmWise Logo" className="h-8 ml-2"/> */}
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:underline transition duration-300">
          Home
        </Link>
        <Link to="/plant-selection" className="text-white hover:underline transition duration-300">
          Plants
        </Link>
        <Link to="/animal-selection" className="text-white hover:underline transition duration-300">
          Animals
        </Link>
        <Link to="/about" className="text-white hover:underline transition duration-300">
          About
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? '✖' : '☰'}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-700 md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-white hover:underline transition duration-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/plantSelection" className="text-white hover:underline transition duration-300" onClick={toggleMenu}>
              Plants
            </Link>
            <Link to="/plantSelection" className="text-white hover:underline transition duration-300" onClick={toggleMenu}>
              Animals
            </Link>
            <Link to="/about" className="text-white hover:underline transition duration-300" onClick={toggleMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
