import Image from '@node_modules/next/image';

const DescriptionBanner = () => {
    return (
        <section className="w-[100%] h-[496px] overflow-hidden relative flex justify-center text-white">
            <Image
                src="/images/About/IMG_5457.JPG"
                alt="Image"
                width={1920}
                height={1080}
                className="lg:min-w-[1024px] h-full w-full object-cover object-[center_-400px] overflow-hidden brightness-50"
                unoptimized
            />
            <div className="absolute inset-0 place-self-center flex flex-col items-center">
                <div className="space-y-[20px] w-[1000px]">
                    <p className="text-[40px] leading-[50px]">
                    Elegant Home<br /> Transformations
                    </p>
                    <p className="leading-[26px]">
                    Working together to breathe new life into your beloved spaces, one<br /> renovation project at a time with precision and creativity.
                    </p>
                    <button className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DescriptionBanner;
