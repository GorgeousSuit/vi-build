'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects } from './project/projects';

const Gallery = () => {
    const router = useRouter();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
            <h1 className="text-3xl font-bold mb-6">Project Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                        onClick={() => router.push(`/gallery/project/${project.id}`)}
                    >
                        <Image
                            src={project.thumbnail}
                            alt={project.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
