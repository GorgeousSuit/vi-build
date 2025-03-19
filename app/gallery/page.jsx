import { client } from '@sanity/lib/client.js';
import { singleProjectQuery } from '@sanity/lib/queries.js';
import GalleryObject from '@components/Gallery/GalleryObject';

export const revalidate = 60; // Revalidate every 60 seconds

const getProjects = async () => {
    return await client.fetch(singleProjectQuery);
};

const Gallery = async () => {
    const projects = await getProjects();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
            <div className="relative overflow-hidden flex flex-col">
                <span className="text-3xl font-bold">Project Gallery</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[20px]">
                {projects.map((project, index) => (
                    <GalleryObject key={project.slug} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
