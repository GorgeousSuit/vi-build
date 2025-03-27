'use client';

import Image from '@node_modules/next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Description = () => {
    const ref = useRef(null);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isInView = useInView(ref, {
        margin: mobileView ? '-20% 0px -20% 0px' : '-20% 0px -20% 0px'
    });

    const scrollToContact = () => {
        document
            .getElementById('ContactUs')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="w-[100%] pb-[60px] relative flex max-lg:flex-col justify-center px-[12px] sm:px-[24px] lg:px-[32px]">
            
            <div className=" absolute top-0 left-[50%] z-[-1] mr-[12px] sm:mr-[24px] lg:mr-[32px] overflow-hidden flex flex-col">
                <motion.div
                    ref={ref}
                    initial={{ x: -20 }}
                    animate={isInView && {x: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="brightness-[70%]"
                >
                    <Image
                        src="/images/About/Banner2.jpg"
                        alt="Image"
                        width={450}
                        height={350}
                        className="w-full max-w-[500px] md:w-full h-[350px] rounded-r-3xl object-cover border border-primary object-center"
                        unoptimized
                    />
                </motion.div>
            </div>
            <div className="max-w-[950px] text-center flex flex-col items-center space-y-5 max-sm:mb-[35px] max-sm:mt-[15px] my-[0px] sm:my-[40px] px-[20px] text-white">
                <motion.div className="relative overflow-hidden flex flex-col">
                    <motion.div
                        ref={ref}
                        initial={{ y: 65 }}
                        animate={isInView && { y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden flex flex-col"
                    >
                        <Image
                            src="/logo/Main black logo.png"
                            alt="Logo"
                            width={120}
                            height={120}
                            className="w-24 mb-[-10px] mt-[-20px]"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="relative overflow-hidden flex flex-col">
                    <motion.span
                        ref={ref}
                        initial={{ y: 100 }}
                        animate={isInView && { y: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                        className="text-2xl xl:text-4xl font-bold"
                    >
                        Crafting Spaces of Lasting Impressions
                    </motion.span>
                </motion.div>
                <motion.span
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="text-sm xl:text-base text-center"
                >
                    Our passion is creating beautiful, functional spaces that
                    reflect your style, enhance your comfort, and elevate your
                    everyday living experience.
                </motion.span>
                <div className="relative overflow-hidden flex flex-col p-[4px]">
                    <motion.div
                        ref={ref}
                        initial={{ y: -75 }}
                        animate={isInView && { y: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 w-36 text-white bg-primary2 rounded-lg btn"
                        >
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
            
            <div className="absolute top-0 right-[50%] z-[-1] ml-[12px] sm:ml-[24px] lg:ml-[32px] overflow-hidden flex flex-col">
                <motion.div
                    ref={ref}
                    initial={{ x: 20 }}
                    animate={isInView && {x: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="brightness-[65%]"
                >
                    <Image
                        src="/images/About/IMG_0861.jpg"
                        alt="Image"
                        width={450}
                        height={350}
                        className="w-full max-w-[500px] md:w-full h-[350px] rounded-l-3xl object-cover border border-primary object-center"
                        unoptimized
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Description;