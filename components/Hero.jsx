import Image from 'next/image';

const Banner = () => {
    return (
        <section className="py-[60px] relative flex justify-center mt-[110px] overflow-hidden px-[12px] sm:px-[24px] lg:px-[32px]">
            <div className="w-full h-[410px] max-w-[1000px] rounded-[32px] rounded-br-none border border-primary relative ">
                <div className="w-[calc-(100%-24px)] lg:w-full h-full overflow-hidden rounded-[32px] rounded-br-none ">
                    <Image
                        src="/images/Banner1.jpg"
                        alt="Image"
                        width={1920}
                        height={1080}
                        className="min-w-[1000px] max-sm:object-[calc(100vw-880px)_-200px] lg:w-full object-[calc(100vw-1000px)_-200px] min-[1000px]:object-[center_-200px]"
                        unoptimized
                    />
                    <div className="absolute top-0 max-sm:right-[-145px] right-[-50px] lg:right-[-1px] h-[410px] w-[1000px] rounded-[32px] rounded-br-none">
                        <Image
                            src="/images/Banner1ladder.png"
                            alt="Image"
                            width={1920}
                            height={1080}
                            className="absolute w-full object-cover object-[center_-200px]"
                            unoptimized
                        />
                    </div>
                    <div className="absolute top-[22%] left-[60px] flex flex-col justify-center text-white rounded-[10px] p-[5px] z-20">
                        <p className="text-[16px] leading-[26px]">
                            Renovate, Innovate, Decorate More{' '}
                        </p>
                        <p className="text-[35px] max-md:font-bold md:text-[45px] leading-[50px] md:leading-[55px]">
                            Transform Your
                            <br /> Home with Our
                            <br />
                            Expertise{' '}
                        </p>
                    </div>
                    <div className="absolute top-[22%] left-[60px] flex flex-col justify-center text-background rounded-[10px] p-[5px] z-10">
                        <p className="text-[16.1px] leading-[26px] tracking-[-0.05px]">
                            Renovate, Innovate, Decorate More{' '}
                        </p>
                        <p className="text-[35.2px] max-md:font-bold md:text-[45.2px] leading-[50px] md:leading-[55px] tracking-[-0.05px]">
                            Transform Your
                            <br /> Home with Our
                            <br />
                            Expertise{' '}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
