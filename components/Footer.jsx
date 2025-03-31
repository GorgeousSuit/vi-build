import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from '@node_modules/next/image';
import Logo from '/public/logo/LogoWhite.svg';

export default function Footer() {
    return (
        <footer className="bg-background text-white py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <Logo className="max-md:self-center" />
                    <div className="flex mt-6 md:mt-0">
                        <div className='place-self-end'>
                            <h3 className="font-bold">Contact</h3>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <a
                                        href="mailto:contact@vibuild.com"
                                        className="hover:underline"
                                    >
                                        vi.build.london@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:1800-RENOVATE"
                                        className="hover:underline"
                                    >
                                        347 Barking Road Str.
                                    </a>
                                </li>
                                <li className="flex space-x-3 mt-2">
                                    <a href="#" className="hover:text-gray-400">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="hover:text-gray-400">
                                        <FaXTwitter />
                                    </a>
                                    <a href="#" className="hover:text-gray-400">
                                        <FaFacebook />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-primary my-6" />
                <p className="text-center text-sm">
                    &copy;2025 VI-(BUILD) Projects LTD. 347 Barking Road Str.
                    London UK. All rights reserved
                </p>
            </div>
        </footer>
    );
}
