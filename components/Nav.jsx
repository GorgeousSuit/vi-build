'use client';

import Logo from '/public/logo/LogoBlack.svg';
import { useState, useEffect } from 'react';
import Link from '@node_modules/next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        if (pathname === '/') {
            document
                .getElementById('ContactUs')
                ?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push('/#ContactUs');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document
            .getElementById('ContactUs')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full bg-white font-bold text-primary2 px-3 sm:px-6 lg:px-8 transition-shadow duration-300 ${
                isScrolled ? 'shadow-md' : ''
            }`}
        >
            <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 lg:py-5">
                <Link href="/" className="text-2xl font-bold uppercase">
                    <Logo className="w-[100px] h-[100px] my-[-20px] ease-linear duration-[0.05s] sm:hover:scale-[1.06]" />
                </Link>

                {/* Hamburger Button */}
                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1 py-[20px] pl-[20px]">
                        <div className={`h-[5px] w-[40px] bg-primary2 transform transition duration-200 ease-in-out ${isOpen && "rotate-[45deg] translate-y-[9px] rounded-full"}`}></div>
                        <div className={`h-[5px] w-[40px] bg-primary2 duration-200 ease-in-out ${isOpen && "opacity-0" }`}></div>
                        <div className={`h-[5px] w-[40px] bg-primary2 transform transition duration-200 ease-in-out ${isOpen && "rotate-[-45deg] translate-y-[-9px] rounded-full"}`}></div>
                    </div>
                </button>

                {/* Navigation Links */}
                {isOpen ? (
                    <motion.ul
                    initial={{ scaleY:0, originY: 0}}
                        animate={{ scaleY:1, originY: 0}}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}

                        className={`lg:flex lg:justify-center uppercase lg:space-x-[120px] lg:text-[20px] ${
                            isOpen ? 'flex flex-col justify-around items-center h-[300px]' : 'hidden'
                        } lg:block absolute lg:static top-20 right-0 w-full bg-white`}
                    >
                        <li className="px-3 py-3 lg:p-0">
                            <Link href="/" className="block relative">
                                <button
                                    className="uppercase hover-underline-black-reverse"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="px-3 py-3 lg:p-0">
                            <Link href="/gallery" className="block relative">
                                <button
                                    className="uppercase hover-underline-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Gallery
                                </button>
                            </Link>
                        </li>
                        <button
                            onClick={() => {
                                handleClick();
                                setIsOpen(false);
                            }}
                            className="m-3 px-9 py-2.5 w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn lg:hidden"
                        >
                            Contact Us
                        </button>
                    </motion.ul>
                ) : (
                    <ul
                        className={`lg:flex lg:justify-center uppercase lg:space-x-[120px] lg:text-[20px] ${
                            isOpen ? 'flex flex-col items-end' : 'hidden'
                        } lg:block absolute lg:static top-20 right-0 w-full bg-white`}
                    >
                        <li className="px-3 py-3 lg:p-0">
                            <Link href="/" className="block relative txt">
                                <button
                                    className="uppercase hover-underline-black-reverse"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="px-3 py-3 lg:p-0">
                            <Link href="/gallery" className="block relative txt">
                                <button
                                    className="uppercase hover-underline-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Gallery
                                </button>
                            </Link>
                        </li>
                        <button
                            onClick={() => {
                                handleClick();
                                setIsOpen(false);
                            }}
                            className="m-3 px-9 py-2.5 w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn lg:hidden"
                        >
                            Contact Us
                        </button>
                    </ul>
                )}
                <button
                    onClick={() => handleClick}
                    className="px-9 py-2.5 w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn max-lg:hidden"
                >
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Nav;

