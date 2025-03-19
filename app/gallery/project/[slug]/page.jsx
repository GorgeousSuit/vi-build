import { client } from '@sanity/lib/client.js';
import { singleProjectQueryItem } from '@sanity/lib/queries.js';
import GalleryDetails from '@components/Gallery/GalleryDetails';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

const getProject = async (slug) => {
    return await client.fetch(singleProjectQueryItem, { slug });
};

const ProjectDetail = async ({ params }) => {
    const project = await getProject(params.slug);

    if (!project) {
        return (
            <div className="mx-auto flex-center flex-col h-[50vh] mt-[200px]">
                <p className="text-[24px] text-background mb-[30px] font-bold">
                    Project not found
                </p>
                <Link
                    href="/gallery"
                    className="block relative text-white font-bold text-[24px] btn bg-primary2 w-[20%] h-[100px] rounded-[32px] flex-center"
                >
                    <button className="">Return to the Gallery Page</button>
                </Link>
            </div>
        );
    }

    return <GalleryDetails project={project} />;
};

export default ProjectDetail;
