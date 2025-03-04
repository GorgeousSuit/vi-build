"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const myAnimation = {
    initial: { opacity: 0, x: -50 },
    inView: { opacity: 1, x: 0, transition: { delay: 2 } }
};

const Testimonial = () => {
    return (
        <motion.div className="bg-gray-100 p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
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

            <blockquote className="mt-6 text-lg italic text-background border-l-4 border-gray-500 pl-4">
                "Choosing VI-(BUILD) was the best decision for our remodel. Their team showed outstanding expertise and exceptional customer care from start to finish."
            </blockquote>

            <div className="mt-4">
                <Image
                    src="/images/Testimony/signature.png"
                    alt="Signature of John Doe"
                    width={150}
                    height={50}
                    className="opacity-70"
                />
            </div>
        </motion.div>
    );
};

export default Testimonial;
