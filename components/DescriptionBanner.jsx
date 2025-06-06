'use client';

import Image from '@node_modules/next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from '@node_modules/next/link';

const DescriptionBanner = () => {
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
        margin: mobileView ? '0% 0px 0% 0px' : '-0% 0px -0% 0px'
    });
    return (
        <section className="sm:w-[100%] min-h-[350px] md:h-[38.75vw] xl:h-[496px] overflow-hidden relative flex justify-center text-white mb-[80px]">
            <Image
                src="/images/About/IMG_5457.JPG"
                alt="Image"
                width={1920}
                height={1080}
                className="max-sm:min-w-[1024px] md:min-w-[1024px] h-full object-cover md:object-[center_-300px] xl:object-[center_-400px] brightness-50 max-sm:text-left"
                unoptimized
            />
            <div className="absolute inset-0 place-self-center py-[16px] md:py-[50px] max-sm:p-[16px] max-xl:p-[32px] max-sm:text-center">
                <div className="w-[78.13vw] xl:w-[1000px] flex flex-col max-sm:items-center">
                    <div className="relative overflow-hidden flex flex-col">
                        <motion.span
                            ref={ref}
                            initial={{ y: 100 }}
                            animate={isInView && { y: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="text-[30px] sm:text-[40px] leading-[50px] hidden"
                        >
                            Elegant Home
                        </motion.span>
                    </div>
                    <div className="relative overflow-hidden flex flex-col">
                        <motion.span
                            ref={ref}
                            initial={{ y: 100 }}
                            animate={isInView && { y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="text-[30px] sm:text-[40px] leading-[50px] hidden"
                        >
                            Transformations
                        </motion.span>
                    </div>
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
                        className="max-sm:text-[16px] leading-[26px] my-[20px]"
                    >
                        VI Build specialises in the execution of high-end residential architecture — including full-scale refurbishments, bespoke extensions, loft conversions, fine stonework, and refined interior finishes.
We realise architectural visions with technical accuracy, meticulous attention to detail, and an unwavering commitment to craftsmanship and quality.
Every project is delivered with deep respect for the architect’s intent — executed with precision, professionalism, and reliability at every stage.
We are equally committed to sustainable building practices — sourcing quality materials responsibly, reducing waste, and working in harmony with the environment wherever possible.
                    </motion.span>
                    <Link href="/gallery">
                        <motion.button
                            ref={ref}
                            initial={{ opacity: 0 }}
                            animate={isInView && { opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="px-[35px] py-[10px] w-[175px] text-white bg-primary2 rounded-lg text-nowrap btn"
                        >
                            Go To Gallery
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DescriptionBanner;
