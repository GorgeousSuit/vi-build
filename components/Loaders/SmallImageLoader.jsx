import { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/logo/MainBlackLogo.svg';

const ImageLoader = ({ src, alt, width, height, className }) => {
    return (
        <div className="w-full h-full relative max-h-[408px]">
            <div className="absolute inset-0 flex-center bg-gray-200 animate-pulse rounded-lg">
                <Image
                    src="/logo/Main black logo.png"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="animate-pulse w-[20%] h-auto"
                    unoptimized
                />
            </div>
        </div>
    );
};

export default ImageLoader;
