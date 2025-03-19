"use client"

import { useState } from 'react';
import Image from 'next/image';
import Logo from "/public/logo/MainBlackLogo.svg"

const ImageLoader = ({ src, alt, width, height, className }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full h-full max-h-[408px]">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-lg">
                    <Image
                               src="/logo/Main black logo.png"
                               alt="Image"
                               width={1920}
                               height={1080}
                               className="animate-pulse w-[20%] h-auto"
                               unoptimized
                              />
                </div>
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`${className} ${isLoading ? 'invisible' : 'visible'}`}
                onLoad={() => setIsLoading(false)}
                unoptimized
            />
        </div>
    );
};

export default ImageLoader;
