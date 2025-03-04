'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 3000); 

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        isVisible && (
            <AnimatePresence mode="wait">
                <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true }}
            className="fixed inset-0 flex items-center justify-center bg-white h-screen z-[100] mt-[110px]"
        >
        
        </motion.div>
            </AnimatePresence>
        )
    );
};

export default Preloader;