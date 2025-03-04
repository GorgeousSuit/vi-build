'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { projects } from '../projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div className="text-center text-red-500">Project not found.</div>;
    }

    const [selectedImage, setSelectedImage] = useState(project.images[0]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
            <button
                onClick={() => window.history.back()}
                className="mb-4 text-blue-500 hover:underline"
            >
                Back to Gallery
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={selectedImage}
                        alt="Project Image"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="flex space-x-2 mt-4">
                        {project.images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="Thumbnail"
                                width={100}
                                height={75}
                                className={`cursor-pointer rounded-lg ${
                                    selectedImage === img ? 'border-2 border-blue-500' : ''
                                }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Project #{project.id}</h1>
                    <p className="mt-2 text-gray-600">Layout: {project.layout}</p>
                    <p className="text-gray-600">Size: {project.size}</p>
                    <p className="text-gray-600">Building Type: {project.type}</p>
                    <p className="text-gray-600">Location: {project.location}</p>
                    <p className="text-gray-600">Cost: {project.cost}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
