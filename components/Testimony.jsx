'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Testimonial = () => {
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
        margin: mobileView ? '50% 0px -50% 0px' : '-50% 0px -50% 0px'
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView && { opacity: 1, x: 0 }}
            transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="bg-gray-100 p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto"
        >
            <div className="flex items-center gap-6">
                <div className="w-24 h-24 relative">
                    <Image
                        src="/images/Testimony/Person.jpg"
                        alt="Architect Name"
                        layout="fill"
                        className="rounded-full object-cover border-4 border-gray-300"
                    />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-background">
                        John Doe
                    </h3>
                    <p className="text-sm text-gray-600">
                        Chief Architect, XYZ Studio
                    </p>
                </div>
            </div>

            <blockquote className="mt-6 text-lg italic text-background border-l-4 border-gray-500 pl-4 relative overflow-hidden flex flex-col">
                <motion.span
                    ref={ref}
                    initial={{ x: -660 }}
                    animate={isInView && { x: 0 }}
                    transition={{
                        duration: 2.5,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true }}
                    className="span"
                >
                    "Choosing VI-(BUILD) was the best decision for our remodel.
                    Their team showed outstanding expertise and exceptional
                    customer care from start to finish."
                </motion.span>
            </blockquote>

            <motion.div 
            ref={ref}
            initial={{ opacity:0 }}
            animate={isInView && { opacity:1 }}
            transition={{
                duration: 3,
                delay:1.5,
                ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}className="mt-4">
                <Image
                    src="/images/Testimony/signature.png"
                    alt="Signature of John Doe"
                    width={150}
                    height={50}
                    className="opacity-70"
                />
            </motion.div>
        </motion.div>
    );
};

export default Testimonial;
