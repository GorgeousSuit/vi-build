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
        <section className="sm:w-[100%] min-h-[350px] h-[38.75vw] xl:h-[496px] overflow-hidden relative flex justify-center text-white max-sm:rounded-[32px] max-sm:rounded-br-none max-sm:mx-[12px]">
            <Image
                src="/images/About/IMG_5457.JPG"
                alt="Image"
                width={1920}
                height={1080}
                className="min-w-[1024px] h-full object-cover object-[center_-300px] xl:object-[center_-400px] overflow-hidden brightness-50"
                unoptimized
            />
            <div className="absolute inset-0 place-self-center py-[50px] max-xl:p-[32px] max-sm:text-center">
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
                            className="text-[30px] sm:text-[40px] leading-[50px]"
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
                            className="text-[30px] sm:text-[40px] leading-[50px]"
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
                        Working together to breathe new life into your beloved
                        spaces, one
                        <br className="max-sm:hidden" /> renovation project at a
                        time with precision and creativity.
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
