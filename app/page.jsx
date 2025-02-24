import Image from 'next/image';
import Logo from '../public/images/Logo.svg';
import Banner from '@components/Banner';
import Description from '@components/Description';
import Recommendation from '@components/Recommendation';
import ContactUs from '@components/ContactUs';

const Home = () => {
    return (
        <section className="absolute w-[calc(100vw)] space-y-[24px] md:space-y-[30px] lg:space-y-[64px]">
            <Banner />
            <Recommendation />
            <Description />
            <ContactUs />
        </section>
    );
};

export default Home;
