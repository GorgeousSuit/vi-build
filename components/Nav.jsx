'use client';

import Logo from '/public/logo/LogoBlack.svg';
import { useState, useEffect } from 'react';
import Link from '@node_modules/next/link';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full bg-white font-bold text-primary2 px-3 sm:px-6 lg:px-8 transition-shadow duration-300 ${
                isScrolled ? 'shadow-md' : ''
            }`}
        >
            <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 lg:py-5">
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
                    } lg:block absolute lg:static top-20 right-0 w-full bg-white`}
                >
                    <li className="px-3 py-3 lg:p-0">
                        <Link href="/" className="block txt">
                            Home
                        </Link>
                    </li>
                    <li className="px-3 py-3 lg:p-0">
                        <Link href="/gallery" className="block txt lg:mx-[70px]">
                            Gallery
                        </Link>
                    </li>
                    <button className="m-3 px-9 py-2.5 w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn lg:hidden">
                        Contact Us
                    </button>
                </ul>
                <button className="px-9 py-2.5 w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn max-lg:hidden">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Nav;
