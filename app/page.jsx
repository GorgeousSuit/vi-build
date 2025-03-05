"use client"

import { useState, useEffect } from 'react';
import Loader from '@components/Loaders/Loader.jsx';
import Preloader from '@components/Loaders/Preloader.jsx';

import Image from 'next/image';
import Hero from '@components/Hero';
import Description from '@components/Description';
import DescriptionBanner from '@components/DescriptionBanner';
import Testimony from '@components/Testimony';
import Services from '@components/OurServices/Sevices.jsx';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return loading ? <Loader /> : (
        <div className="absolute w-[calc(100vw)] space-y-[90px] lg:space-y-[160px] text-primary2 overflow-x-hidden">
            <Preloader />
            <Hero />
            <Description />
            <DescriptionBanner />
            <div className="px-[12px] sm:px-[24px] lg:px-[32px]">
                <Testimony />
            </div>
            <Services />
            <div className="px-[12px] sm:px-[24px] lg:px-[32px]">
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
