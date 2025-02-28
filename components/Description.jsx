import Image from '@node_modules/next/image';


const Description = () => {
    return (
        <section className="w-[100%] h-[550px] py-[60px] relative flex justify-between mt-[110px]">
            <div className="place-self-start">
                <Image
                    src="/images/About/Worker.JPG"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-[450px] h-[350px] rounded-r-[32px] object-cover border border-primary"
                    unoptimized
                />
            </div>
            <div className="text-center place-self-center flex flex-col items-center space-y-[20px]">
                <Image
                 src="/logo/Main black logo.png"
                 alt="Image"
                 width={1920}
                 height={1080}
                 className=" w-[120px] mb-[-20px] mt-[-20px]"
                 unoptimized
                />
                <p className="text-[40px] leading-[50px]">Crafting Spaces of Lasting<br /> Impressions </p>
                <p className="leading-[26px]">
                    Our passion is creating beautiful, functional spaces that
                    reflect your style,<br /> enhance your comfort, and elevate your
                    everyday living experience.{' '}
                </p>
                <button className="px-[35px] py-[10px] w-[150px] text-white bg-primary2 rounded-lg text-nowrap btn">
                    Contact Us
                </button>
            </div>
            <div className="place-self-end">
                <Image
                    src="/images/About/Banner2.jpg"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-[450px] h-[350px] rounded-l-[32px] object-cover border border-primary"
                    unoptimized
                />
            </div>
        </section>
    );
};

export default Description;
