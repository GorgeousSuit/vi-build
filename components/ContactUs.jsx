'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsGeoAltFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';


const ContactUs = () => {
    const ref = useRef(null);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 1280);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isInView = useInView(ref, {
        margin: mobileView ? '0% 0px 0% 0px' : '-40% 0px -40% 0px'
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Prevent non-numeric input in phone number
        if (name === 'phoneNumber' && !/^\d*$/.test(value)) return;
    
        setFormData({ ...formData, [name]: value });
    };
    
    const validateForm = () => {
        let newErrors = {};
        if (formData.firstName.length < 2) newErrors.firstName = 'Minimum 2 characters required';
        if (formData.lastName.length < 2) newErrors.lastName = 'Minimum 2 characters required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
        if (formData.phoneNumber.length < 6) newErrors.phoneNumber = 'Minimum 6 digits required';
        if (formData.message.length < 10) newErrors.message = 'Minimum 10 characters required';
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                });
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        }
    };


    return (
        <div className="mt-[-90px] lg:mt-[-180px]">
            <div id="ContactUs" className="h-[110px] w-[10px]"></div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView && { opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="w-full md:px-12 bg-gray-100 font-nunito text-primary2 rounded-[32px]"
            >
                <div className="max-w-6xl mx-auto flex flex-wrap">
                    <div className="w-full lg:w-7/12 border-b-2 lg:border-r-2 lg:border-b-0 border-gray-400 p-6 lg:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold">
                                    Contact us
                                </h2>
                                <p className="text-gray-500 mt-2">
                                    Get in touch with us to start transforming
                                    your space today.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-semibold">
                                        FIRST NAME
                                    </label>
                                    <input
                                        type="text" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                        minLength={2} 
                                        required
                                        className="w-full p-3 border rounded"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="font-semibold">
                                        LAST NAME
                                    </label>
                                    <input
                                        type="text" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                        minLength={2} 
                                        required
                                        className="w-full p-3 border rounded"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="font-semibold">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required
                                        className="w-full p-3 border rounded"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="font-semibold">
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        type="tel" 
                                        name="phoneNumber" 
                                        value={formData.phoneNumber} 
                                        onChange={handleChange} 
                                        pattern="\d*" 
                                        minLength={6} 
                                        required
                                        className="w-full p-3 border rounded"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm">
                                            {errors.phoneNumber}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="font-semibold">
                                    WHAT DO YOU HAVE IN MIND
                                </label>
                                <textarea
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    minLength={10} 
                                    required
                                    placeholder="Please enter query..."
                                    className="w-full p-3 border rounded h-32"
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn"
                                >
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
                            <div className="flex items-center">
                                <FaPhoneAlt className="w-12 h-8 mr-4" />
                                <p className="text-gray-500">+1495 1474</p>
                            </div>
                            <div className="flex items-center">
                                <IoMdMail className="w-12 h-8 mr-4" />
                                <p className="text-gray-500">
                                    hello@example.com
                                </p>
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
            </motion.div>
        </div>
    );
};

export default ContactUs;
