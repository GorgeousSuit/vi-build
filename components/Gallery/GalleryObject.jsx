'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const GalleryObject = ({project, index}) => {
	const router = useRouter();
  return (
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
	    router.push(`/gallery/project/${project.slug}`)
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
  )
}

export default GalleryObject