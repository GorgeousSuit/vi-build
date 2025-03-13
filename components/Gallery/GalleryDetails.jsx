'use client';

import { useState } from 'react';
import Image from 'next/image';


const GalleryDetails = ({project}) => {
	const [selectedImage, setSelectedImage] = useState(project.images[0].url);
  return (
	<div className="max-w-6xl mx-auto px-4 py-8 mt-[110px]">
	<button
	    onClick={() => window.history.back()}
	    className="mb-4 text-white btn bg-primary2 p-[10px] rounded-[10px]"
	>
	    ↩ Back to Gallery
	</button>
	<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
	    <div>
		   <Image
			  src={selectedImage}
			  alt="Project Image"
			  width={800}
			  height={600}
			  className="w-full h-auto max-h-[408px] object-cover rounded-lg"
		   />
		   <div className="flex space-x-2 mt-4">
			  {project.images.map((img, index) => (
				 <Image
					key={index}
					src={img.url}
					alt="Thumbnail"
					width={100}
					height={75}
					className={`cursor-pointer rounded-lg object-cover max-h-[70px] ${
					    selectedImage === img
						   ? 'border-2 border-secondary1'
						   : ''
					}`}
					onClick={() => setSelectedImage(img.url)}
				 />
			  ))}
		   </div>
	    </div>
	    <div>
		   <h1 className="text-[40px] font-bold max-md:text-center">
			  Project «{project.name}»
		   </h1>
		   <div className="space-y-[20px] text-[20px] text-primary2 mt-[30px]">
			  <div className="border-t-[1px] border-background border-dotted p-[15px] flex justify-between">
				 <p className="text-primary">
					Layout:
				 </p>
				 <p className="font-bold">
				    {project.layout}
				 </p>
			  </div>
			  <div className="border-t-[1px] border-background border-dotted p-[15px] flex justify-between">
				 <p className="text-primary">Size:</p>
				 <p className="font-bold">{project.size}</p>
			  </div>
			  <div className="border-t-[1px] border-background border-dotted p-[15px] flex justify-between">
				 <p className="text-primary">
					Building Type:
				 </p>
				 <p className="font-bold">
				    {project.type}
				 </p>
			  </div>
			  <div className="border-t-[1px] border-background border-dotted p-[15px] flex justify-between">
				 <p className="text-primary">
					Location:
				 </p>
				 <p className="font-bold">
					{project.location}
				 </p>
			  </div>
			  <div className="border-t-[1px] border-background border-dotted p-[15px] flex justify-between">
				 <p className="text-primary">Cost:</p>
				 <p className="font-bold">{project.cost}</p>
			  </div>
		   </div>
	    </div>
	</div>
 </div>
  )
}

export default GalleryDetails