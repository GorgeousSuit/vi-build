'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '@components/Loaders/Loader.jsx';
import Preloader from '@components/Loaders/Preloader.jsx';

const Banner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return (
        <section className="pt-[30px] pb-[80px] relative flex justify-center mt-[110px] overflow-hidden">
            <Preloader />
            <div className="w-full h-[410px] relative ">
                <div className="w-[calc-(100%-24px)] lg:w-full h-full overflow-hidden">
                    <Image
                        src="/images/Banner1-2.jpg"
                        alt="Image"
                        width={1920}
                        height={1080}
                        className="max-[1000px]:min-w-[1000px] max-sm:object-[calc(100vw-880px)_-200px] object-[calc(100vw-1000px)_-200px] min-[1000px]:object-[left_-23.43vw]"
                        unoptimized
                        priority
                    />
                    <motion.div className="absolute top-0 max-sm:right-[-120px] right-[0px] lg:right-[-1px] h-[410px] w-[1000px]">
                        <Image
                            src="/images/Banner1ladder.png"
                            alt="Image"
                            width={1920}
                            height={1080}
                            className="min-[1000px]:hidden absolute w-full object-cover object-[center_-200px]"
                        />
                    </motion.div>
                    <Image
                        src="/images/Banner1ladder.png"
                        alt="Image"
                        width={1920}
                        height={1080}
                        className="hidden absolute w-full object-cover object-[center_-200px]"
                        unoptimized
                    />
                    <div className="absolute top-[22%] left-[60px] flex flex-col justify-center text-white rounded-[10px] p-[5px] z-20 overflow-hidden">
                        {/* //////////////1.1 */}
                        <motion.div className="relative overflow-hidden flex flex-col">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                viewport={{ once: true }}
                                className="text-[16px] leading-[26px]"
                            >
                                Renovate, Innovate, Decorate More{' '}
                            </motion.span>
                        </motion.div>
                        {/* //////////////1.2 */}
                        <motion.div className="relative overflow-hidden flex flex-col">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.7,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                viewport={{ once: true }}
                                className="text-[35px] max-md:font-bold md:text-[45px] leading-[50px] md:leading-[55px]"
                            >
                                Transform Your
                            </motion.span>
                        </motion.div>
                        <motion.div className="relative overflow-hidden flex flex-col">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.9,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                viewport={{ once: true }}
                                className="text-[35px] max-md:font-bold md:text-[45px] leading-[50px] md:leading-[55px]"
                            >
                                Home with Our
                            </motion.span>
                        </motion.div>
                        <motion.div className="relative overflow-hidden flex flex-col">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 1.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                viewport={{ once: true }}
                                className="text-[35px] max-md:font-bold md:text-[45px] leading-[50px] md:leading-[55px]"
                            >
                                Expertise
                            </motion.span>
                        </motion.div>
                    </div>

                    <div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="absolute top-[22%] left-[60px] flex flex-col justify-center text-background rounded-[10px] p-[5px] z-10"
                    >
                        {/* ////////////2.1 */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="text-[16.1px] leading-[26px] tracking-[-0.05px]"
                        >
                            Renovate, Innovate, Decorate More{' '}
                        </motion.span>

                        {/* /////////////2.2 */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            viewport={{ once: true }}
                            className="text-[35.2px] max-md:font-bold md:text-[45.2px] leading-[50px] md:leading-[55px] tracking-[-0.05px]"
                        >
                            Transform Your
                            <br /> Home with Our
                            <br />
                            Expertise{' '}
                        </motion.span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
