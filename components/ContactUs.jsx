'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsGeoAltFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="w-full md:px-12 bg-gray-100 font-nunito text-primary2">
            <div className="max-w-6xl mx-auto flex flex-wrap">
                <div className="w-full lg:w-7/12 border-b-2 lg:border-r-2 lg:border-b-0 border-gray-400 p-6 lg:p-8">
                    <form className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold">Contact us</h2>
                            <p className="text-gray-500 mt-2">
                                Get in touch with us to start transforming your
                                space today.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-semibold">
                                    FIRST NAME
                                </label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    className="w-full p-3 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">
                                    LAST NAME
                                </label>
                                <input
                                    type="text"
                                    name="LastName"
                                    className="w-full p-3 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">EMAIL</label>
                                <input
                                    type="email"
                                    name="Email"
                                    className="w-full p-3 border rounded"
                                />
                            </div>
                            <div>
                                <label className="font-semibold">
                                    PHONE NUMBER
                                </label>
                                <input
                                    type="tel"
                                    name="PhoneNumber"
                                    className="w-full p-3 border rounded"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold">
                                WHAT DO YOU HAVE IN MIND
                            </label>
                            <textarea
                                placeholder="Please enter query..."
                                className="w-full p-3 border rounded h-32"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-5/12 flex flex-col items-center p-6 lg:p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Contact us</h2>
                        <p className="text-gray-500 mt-2">
                            Have a project in mind? Let’s discuss how we can
                            bring your vision to life.
                        </p>
                    </div>
                    <div className="mt-6 space-y-6 text-primary2">
                        <div className="flex items-center ">
                            <FaPhoneAlt className="w-12 h-8 mr-4 " />

                            <p className="text-gray-500">+1495 1474</p>
                        </div>
                        <div className="flex items-center">
                            <IoMdMail className="w-12 h-8 mr-4" />

                            <p className="text-gray-500">hello@example.com</p>
                        </div>
                        <div className="flex items-center">
                            <BsGeoAltFill className="w-12 h-8 mr-4" />
                            <p className="text-gray-500">
                                347 Barking Road street
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-8 space-x-4 text-primary2">
                        <a href="#">
                            <FaGoogle className="w-6 h-6 " />
                        </a>
                        <a href="#">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                        <a href="#">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
