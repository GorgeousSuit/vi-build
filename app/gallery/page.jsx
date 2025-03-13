import Image from 'next/image';
import Link from 'next/link';
import {client} from '@sanity/lib/client.js'
import { motion, useInView } from 'framer-motion';
import {singleProjectQuery} from '@sanity/lib/queries.js'
import GalleryObject from '@components/Gallery/GalleryObject';

const projects = await client.fetch(singleProjectQuery)


const Gallery = async () => {

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
            <div className="relative overflow-hidden flex flex-col">
                <span
                    className="text-3xl font-bold"
                >
                    Project Gallery
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[20px]">
                {projects.map((project, index) => (
                    <GalleryObject
                    key={project.slug}
                    project = {project}
                    index = {index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
