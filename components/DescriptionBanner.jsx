import Image from '@node_modules/next/image';

const DescriptionBanner = () => {
    return (
        <section className="sm:w-[100%] min-h-[350px] h-[38.75vw] xl:h-[496px] overflow-hidden relative flex justify-center text-white max-sm:rounded-[32px] max-sm:rounded-br-none max-sm:mx-[20px]">
            <Image
                src="/images/About/IMG_5457.JPG"
                alt="Image"
                width={1920}
                height={1080}
                className="min-w-[1024px] h-full object-cover object-[center_-300px] xl:object-[center_-400px] overflow-hidden brightness-50"
                unoptimized
            />
            <div className="absolute inset-0 place-self-center flex flex-col items-center py-[50px] max-xl:p-[32px] max-sm:text-center">
                <div className="space-y-[20px] w-[78.13vw] xl:w-[1000px]">
                    <p className="text-[30px] sm:text-[40px] leading-[50px]">
                    Elegant Home<br /> Transformations
                    </p>
                    <p className="max-sm:text-[16px] leading-[26px]">
                    Working together to breathe new life into your beloved spaces, one<br className='max-sm:hidden' /> renovation project at a time with precision and creativity.
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
