'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects } from './project/projects';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Gallery = () => {
    const router = useRouter();

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

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
            <div className="relative overflow-hidden flex flex-col">
                <motion.span
                    className="text-3xl font-bold"
                >
                    Project Gallery
                </motion.span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[20px]">
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: index * 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                        key={project.id}
                        className="cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                        onClick={() =>
                            router.push(`/gallery/project/${project.id}`)
                        }
                    >
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">
                                {project.name}
                            </h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
