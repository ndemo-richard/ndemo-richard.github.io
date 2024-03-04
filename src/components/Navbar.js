import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
            <Link to="hero" spy={true} smooth={true} duration={500} className="flex items-center py-4 px-2 font-semibold text-white text-lg">
               Richard Onyancha
            </Link>

            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Home</Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">About</Link>
              <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Portfolio</Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-accent font-semibold hover:text-neon transition duration-300">Contact</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)}>
              {/* SVG icon */}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">About</Link>
        <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Portfolio</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-4 text-sm text-accent hover:bg-dark-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
