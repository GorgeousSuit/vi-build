'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ImageLoader from '@components/Loaders/ImageLoader';
import SmallImageLoader from '@components/Loaders/SmallImageLoader.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GalleryDetails = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(project.images[0].url);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:mt-[110px] mt-[70px]">
            <button
                onClick={() => window.history.back()}
                className="max-sm:hidden mb-4 text-white btn bg-primary2 p-[10px] rounded-[10px]"
            >
                ↩ Back to Gallery
            </button>
            <h1 className="sm:hidden text-[29px] font-bold max-md:text-center mb-[10px]">
                Project «{project.name}»
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Slider (Mobile) */}
                {isMobile ? (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        className="w-full max-h-[408px] rounded-lg"
                    >
                        {project.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={img.url}
                                    alt={`Project Image ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="max-w-full h-full sm:max-lg:h-[39.84vw] lg:max-h-[408px] object-cover rounded-lg "
                                    unoptimized
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    /* Static Image & Thumbnails (Desktop) */
                    <div>
                        <ImageLoader
                            src={selectedImage}
                            alt="Project Image"
                            width={800}
                            height={600}
                            className="w-full h-full max-h-[408px] object-cover rounded-lg"
                        />

                        <div className="mt-4 grid grid-flow-col auto-cols-max gap-2 overflow-x-auto">
                            {project.images.map((img, index) =>
                                <div key={img._key || index} className="">
                                    {isLoading && (
                                        <SmallImageLoader
                                            key={index+"loader"}
                                            src={img.url}
                                            alt="Thumbnail"
                                            width={100}
                                            height={75}
                                        />
                                    )}
                                        <Image
                                            key={index}
                                            src={img.url}
                                            alt="Thumbnail"
                                            width={100}
                                            height={75}
                                            onLoad={() => setIsLoading(false)}
                                            className={`cursor-pointer rounded-lg object-cover max-h-[70px] ${
                                                selectedImage === img.url
                                                    ? 'border-2 border-secondary1'
                                                    : ''
                                            } ${isLoading ? 'invisible' : 'visible'}`}
                                            onClick={() =>
                                                setSelectedImage(img.url)
                                            }
                                        />
                                </div>
                                
                            )}
                        </div>
                    </div>
                )}

                {/* Project Details */}
                <div>
                    <h1 className="max-sm:hidden text-[40px] font-bold max-md:text-center">
                        Project «{project.name}»
                    </h1>
                    <div className="space-y-[20px] text-[16px] text-primary2 mt-[30px] mb-[30px]">
                        {[
                            ['Layout', project.layout],
                            ['Size', project.size],
                            ['Building Type', project.type],
                            ['Location', project.location],
                            ['Cost', project.cost]
                        ].map(([label, value], index) => (
                            <div
                                key={label}
                                className={`p-[15px] flex justify-between border-background border-dotted ${
                                    index !== 0 ? 'border-t-[1px]' : ''
                                }`}
                            >
                                <p className="text-primary">{label}:</p>
                                <p className="font-bold">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetails;
