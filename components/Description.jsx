'use client';

import Image from '@node_modules/next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Description = () => {
    const ref = useRef(null);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 768); 
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isInView = useInView(ref, {
        margin: mobileView ? '50% 0px 50% 0px' : '-50% 0px -50% 0px'
    });

    return (
        <section className="w-[100%] xl:h-[550px] py-[60px] relative flex max-xl:flex-col justify-between px-[12px] sm:px-[24px] lg:px-[32px]">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView && { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/images/About/Worker.JPG"
                    alt="Image"
                    width={450}
                    height={350}
                    className="w-72 h-56 md:w-[450px] md:h-[350px] rounded-r-3xl object-cover border border-primary"
                    unoptimized
                />
            </motion.div>
            <div className="text-center flex flex-col items-center space-y-5 max-sm:mb-[35px] max-sm:mt-[15px] my-[0px] sm:my-[40px] px-[20px]">
                <Image
                    src="/logo/Main black logo.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="w-24 mb-[-10px]"
                    unoptimized
                />
                <p className="text-2xl md:text-4xl font-bold">
                    Crafting Spaces of Lasting Impressions
                </p>
                <p className="text-sm md:text-base text-center">
                    Our passion is creating beautiful, functional spaces that
                    reflect your style, enhance your comfort, and elevate your
                    everyday living experience.
                </p>
                <button className="px-6 py-3 w-36 text-white bg-primary2 rounded-lg">
                    Contact Us
                </button>
            </div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView && { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="place-self-end"
            >
                <Image
                    src="/images/About/Banner2.jpg"
                    alt="Image"
                    width={450}
                    height={350}
                    className="w-72 h-56 md:w-[450px] md:h-[350px] rounded-l-3xl object-cover border border-primary"
                    unoptimized
                />
            </motion.div>
        </section>
    );
};

export default Description;
