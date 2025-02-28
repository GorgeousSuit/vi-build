import Image from '@node_modules/next/image';
import ServiceItem from '@components/OurServices/ServiceItem.jsx';
import FirstIcon from '/public/images/OurServices/1.svg';
import SecondIcon from '/public/images/OurServices/2.svg';
import ThirdIcon from '/public/images/OurServices/3.svg';
import FourthIcon from '/public/images/OurServices/4.svg';
import FifthIcon from '/public/images/OurServices/5.svg';

const services = [
    {
        title: 'Home Transformation',
        description:
            'Our home transformation service combines creativity with expert craftsmanship to deliver stunning results for your complete satisfaction.',
        Icon: FirstIcon
    },
    {
        title: 'Exterior Enhancement ',
        description:
            "Our exterior services improve curb appeal while ensuring your home's safety and durability, tailored to your specific needs.",
        Icon: SecondIcon
    },
    {
        title: 'Bathroom Bliss ',
        description:
            'Create an inviting and functional bathroom space that offers both relaxation and sophisticated style with our innovative solutions.',
        Icon: ThirdIcon
    },
    {
        title: 'Interior Innovation ',
        description:
            'Engage in a seamless interior redesign process that combines aesthetic appeal with functional optimization to rejuvenate your living spaces.',
        Icon: FourthIcon
    },
    {
        title: 'Kitchen Revamp ',
        description:
            'Transform your kitchen with our expert team, ensuring both aesthetic beauty and functional efficiency in every detail.',
        Icon: FifthIcon
    },
    {
        title: 'Flooring Facelift ',
        description:
            "Elevate your home's ambiance and functionality with our expert flooring solutions that meet all your design preferences.",
        Icon: FirstIcon
    }
];

const Services = () => {
    return (
        <section className="text-center">
            <p className="text-[40px] leading-[50px]">Our Expert Services</p>
            <p className="leading-[26px] mt-[20px]">
                Explore a vast array of renovation services tailored to your
                unique needs and
                <br /> style by VI-(BUILD).
            </p>
            <div className="flex flex-wrap max-w-[1400px] justify-between items-center mx-auto max-lg:flex-col">
                {services.map((service, index) => {
                    return (
                        <ServiceItem
                            key={index}
                            {...service}
                            index={index}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
