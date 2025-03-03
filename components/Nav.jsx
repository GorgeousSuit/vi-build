'use client';

import Logo from '/public/logo/LogoBlack.svg';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-[0px] left-[0px] z-50 w-[calc(100%)] bg-white font-bold text-primary2 hidden">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 py-[10px]">
                <a href="#" className="text-2xl font-bold uppercase">
                    <Logo />
                </a>

                {/* Hamburger Button */}
                <button
                    className="block lg:hidden focus:outline-none"
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
                    className={`lg:flex lg:justify-center uppercase ${
                        isOpen ? 'block' : 'hidden'
                    } lg:block absolute lg:static top-16 left-0 bg-primary/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none`}
                >
                    <li className="px-4 py-2 lg:p-0">
                        <a href="#" className="block txt">
                            Home
                        </a>
                    </li>
                    <li className="px-4 py-2 lg:p-0">
                        <a href="#" className="block txt lg:mx-[70px]">
                            About
                        </a>
                    </li>
                    <li className="px-4 py-2 lg:p-0 lg:ml-[-15px]">
                        <a href="#" className="block txt">
                            Contact
                        </a>
                    </li>
                </ul>
                <button className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn">
                    Contact Us
                </button>
                
            </div>
        </nav>
    );
};

export default Nav;
