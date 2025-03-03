'use client';

import Logo from '/public/logo/LogoBlack.svg';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-[0px] left-[0px] z-50 w-[calc(100%)] bg-white font-bold text-primary2 px-[12px] sm:px-[24px] lg:px-[32px]">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between py-[16px] lg:py-[20px]">
                <a href="#" className="text-2xl font-bold uppercase">
                    <Logo className="w-[100px] h-[100px] my-[-20px]" />
                </a>

                {/* Hamburger Button */}
                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Toggle Menu</span>
                    <div className="space-y-1">
                        <div className="h-[5px] w-[40px] bg-primary2"></div>
                        <div className="h-[5px] w-[40px] bg-primary2"></div>
                        <div className="h-[5px] w-[40px] bg-primary2"></div>
                    </div>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex lg:justify-center uppercase ${
                        isOpen ? 'flex flex-col items-end' : 'hidden'
                    } lg:block absolute lg:static top-20 right-0 w-full bg-white shadow-sm`}
                >
                    <li className="px-[12px] py-[12px] lg:p-0">
                        <a href="#" className="block txt">
                            Home
                        </a>
                    </li>
                    <li className="px-[12px] py-[12px] lg:p-0">
                        <a href="#" className="block txt lg:mx-[70px]">
                            About
                        </a>
                    </li>
                    <button className="m-[12px] px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn lg:hidden">
                        Contact Us
                    </button>
                </ul>
                <button className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn max-lg:hidden">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Nav;
