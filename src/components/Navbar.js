// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">Richard Onyancha</span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Home</a>
              <a href="#about" className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">About</a>
              <a href="#portfolio" className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Portfolio</a>
              <a href="#contact" className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Contact</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-accent"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Home</a>
        <a href="#about" className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">About</a>
        <a href="#portfolio" className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Portfolio</a>
        <a href="#contact" className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
