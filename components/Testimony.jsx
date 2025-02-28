import Image from 'next/image';
import { DM_Serif_Text } from 'next/font/google';

const dmSerifText = DM_Serif_Text({
    weight: '400', // DM Serif Text supports only 400
    subsets: ['latin'] // Use subsets as per your need
});

const Recommendation = () => {
    return (
        <section className={`text-center flex flex-col items-center`}>
            <p className="text-[40px] leading-[50px] mb-[50px]">
                Real Experiences, Real Transformations, Real Impact{' '}
            </p>
            <div className="relative h-[410px] max-w-[1000px] rounded-[32px] border border-primary overflow-hidden">
                <Image
                    src="/images/Testimony/Kitchen.JPG"
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="w-full object-cover object-[center_-200px] brightness-50"
                    unoptimized
                />
                <div
                    className={`absolute top-0 left-0 pt-[30px] text-white text-left flex justify-center items-center w-[1000px] h-[410px] p-[32px] space-x-[50px] ${dmSerifText.className}`}
                >
                    <div className="mb-[30px]">
                        <div className="w-[200px] h-[200px] justify-self-end text-white">
                            <Image
                                src="/images/Person.jpg"
                                alt="Image"
                                width={1920}
                                height={1080}
                                className="object-cover object-[center_top] rounded-full overflow-hidden w-[200px] h-[200px]"
                                unoptimized
                            />
                            <div className="text-center">
                                <p className="text-3xl">John Doe</p>
                                <p className="text-sm mb-2">
                                    CEO Architector
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[34px] leading-[44px] font-bold">
                            A Game-Changer in
                            <br /> Home Renovation Experience
                        </p>
                        <p className="text-[18] leading-[28px] mt-[15px]">
                            Choosing VI-(BUILD) Projects was the best
                            <br /> decision for our remodel. Their team showed
                            outstanding
                            <br /> expertise and exceptional customer care from
                            start to finish.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendation;
