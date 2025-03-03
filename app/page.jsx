import Image from 'next/image';
import Hero from '@components/Hero';
import Description from '@components/Description';
import DescriptionBanner from '@components/DescriptionBanner';
import Testimony from '@components/Testimony';
import Services from '@components/OurServices/Sevices.jsx';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';

const Home = () => {
    return (
        <div className="absolute w-[calc(100vw)] space-y-[90px] lg:space-y-[180px] text-primary2 ">
            <Hero />
            <Description />
            <DescriptionBanner />
            <Services />
            <Testimony />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
