'use client';

import Logo from '/public/images/Logo.svg';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="fixed top-[0px] left-[0px] z-50 w-[calc(100%)] bg-primary/60 backdrop-blur-md shadow-lg font-bold">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        
      <a href="#" className="text-2xl font-bold text-white uppercase">
          Logo
        </a>

        {/* Hamburger Button */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="space-y-1">
            <div className="h-0.5 w-6 bg-white"></div>
            <div className="h-0.5 w-6 bg-white"></div>
            <div className="h-0.5 w-6 bg-white"></div>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:justify-end lg:space-x-[40px] text-white ${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:static top-16 left-0 w-full bg-primary/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none`}
        >
          <li className="px-4 py-2 lg:p-0">
            <a href="#" className="block hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="px-4 py-2 lg:p-0">
            <a href="#" className="block hover:text-gray-300">
              About
            </a>
          </li>
          <li className="px-4 py-2 lg:p-0">
            <a href="#" className="block hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Nav;
