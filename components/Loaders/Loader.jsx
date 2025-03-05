"use client"

import { motion, useInView } from 'framer-motion';
import Logo from "/public/logo/MainBlackLogo.svg"
import Image from '@node_modules/next/image';

const loading = () => {
    return (
        <motion.div
            initial={{ opacity: 1}}
            animate={{ opacity: 0 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 flex items-center justify-center bg-white h-[100svh] z-[100]"
        >
          <Image
           src="/logo/Main black logo.png"
           alt="Image"
           width={1920}
           height={1080}
           className="animate-pulse w-[300px] h-[300px]"
           unoptimized
          />
        </motion.div>
    );
};

export default loading;
