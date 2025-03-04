'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ServiceItem = ({ title, description, Icon, index }) => {
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
        margin: mobileView ? '0% 0px 0% 0px' : '-0% 0px -0% 0px'
    });

    const margin =
        index === 1
            ? 'mt-[60px]'
            : index === 2
            ? 'mt-[120px]'
            : index === 3
            ? 'mt-[-80px]'
            : index === 4
            ? 'mt-[-40px]'
            : 'mt-[20px]';

    return (
        <motion.div className="max-lg:flex max-lg:justify-center ">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 300 : -300 }}
                    animate={isInView && { opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`p-[20px] max-sm:w-[90%] max-lg:w-[100%] lg:p-[50px] max-w-[415px] max-[1400px]:w-[29.64vw] lg:h-[330px] border-[2px] border-secondary1 rounded-[16px] text-left flex flex-col justify-center ${margin} max-lg:mt-[20px] mx-[10px]`}
                >
                    <div className="p-[12px] bg-secondary2 inline-flex w-fit h-fit mb-[20px]">
                        <Icon className="w-[26px] h-[26px] text-background" />
                    </div>
                    <p className="text-[24px] font-[700] leading-[34px] mb-[12px]">
                        {title}
                    </p>
                    <p className="leading-[26px]">{description}</p>
                </motion.div>
        </motion.div>
    );
};

export default ServiceItem;
