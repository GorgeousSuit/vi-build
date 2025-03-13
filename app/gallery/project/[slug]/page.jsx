import Image from 'next/image';
import { singleProjectQueryItem } from '@sanity/lib/queries.js';
import { client } from '@sanity/lib/client.js';
import GalleryDetails from '@components/Gallery/GalleryDetails';

const ProjectDetail = async ({ params }) => {
    const { slug } = params;
    console.log('Fetching project with slug:', slug);

    const project = await client.fetch(singleProjectQueryItem, { slug });
    console.log('Fetched project:', project);

    if (!project) {
        return (
            <p className="text-center text-red-500 mt-[200px]">
                Project not found
            </p>
        );
    }
    return (
        <GalleryDetails
        project={project} />
    );
};

export default ProjectDetail;
