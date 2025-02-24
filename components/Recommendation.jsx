import Image from 'next/image';
import { DM_Serif_Text } from 'next/font/google';

const dmSerifText = DM_Serif_Text({
    weight: '400', // DM Serif Text supports only 400
    subsets: ['latin'] // Use subsets as per your need
});

const Recommendation = () => {
    return (
        <section className={`p-[60px] h-[355px] ${dmSerifText.className}`}>
            <div className="mx-auto max-w-[1280px] flex">
                <div className=" basis-1/2 relative pr-[60px]">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden justify-self-end">
                        <Image
                            src="/images/Person.jpg"
                            alt="Image"
                            width={1920}
                            height={1080}
                            className="object-cover object-[center_center]"
                            unoptimized
                        />
                        <div className="absolute w-[200px] h-[200px] rounded-full overflow-hidden justify-self-end bg-gradient-to-r from-[#505050] via-gray-600 to-gray-500 shadow-lg top-[35px] z-[-1]"></div>
                    </div>
                    <div className="absolute h-[320px] w-[2px] bg-black z-[-2] top-[-40px] right-[calc(160px-1px)]"></div>
                </div>
                <div className="basis-1/2 text-center max-w-[400px] space-y-[30px]">
                    <p className="text-gray-700 leading-relaxed">
                        "This company consistently delivers outstanding results.
                        Their innovative approach and dedication to excellence
                        set them apart in the industry. Highly recommended!"
                    </p>
                    <div className="">
                        <h3 className="text-3xl text-gray-800">John Doe</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            Team Leader
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendation;
