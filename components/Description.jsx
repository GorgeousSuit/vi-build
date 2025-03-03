import Image from '@node_modules/next/image';


const Description = () => {
    return (
        <section className="w-[100%] xl:h-[550px] py-[60px] relative flex max-xl:flex-col justify-between mt-[110px]">
            <div className="place-self-start">
            <Image
                src="/images/About/Worker.JPG"
                alt="Image"
                width={450}
                height={350}
                className="w-72 h-56 md:w-[450px] md:h-[350px] rounded-r-3xl object-cover border border-primary"
                unoptimized
            />
            </div>
            <div className="text-center flex flex-col items-center space-y-5 max-sm:mb-[35px] max-sm:mt-[15px] my-[0px] sm:my-[40px] px-[20px]">
                <Image
                    src="/logo/Main black logo.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="w-24 mb-[-10px]"
                    unoptimized
                />
                <p className="text-2xl md:text-4xl font-bold">Crafting Spaces of Lasting Impressions</p>
                <p className="text-sm md:text-base text-center">
                    Our passion is creating beautiful, functional spaces that reflect your style,
                    enhance your comfort, and elevate your everyday living experience.
                </p>
                <button className="px-6 py-3 w-36 text-white bg-primary2 rounded-lg">Contact Us</button>
            </div>
            <div className="place-self-end">
            <Image
                src="/images/About/Banner2.jpg"
                alt="Image"
                width={450}
                height={350}
                className="w-72 h-56 md:w-[450px] md:h-[350px] rounded-l-3xl object-cover border border-primary"
                unoptimized
            />
            </div>
        </section>
    );
};

export default Description;