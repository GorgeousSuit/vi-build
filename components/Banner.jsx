import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-[100%] h-[50vw] overflow-hidden relative flex justify-center">
            <Image
                src="/images/Banner1.jpg"
                alt="Image"
                width={1920}
                height={1080}
                className="lg:min-w-[1024px] h-full w-full object-cover object-[center_-14.65vw] lg:object-[center_-15.63vw] overflow-hidden"
                unoptimized
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-[5vw]">Building Safely Together</p>
        </div>
    );
};

export default Banner;
