import React from 'react';
import Contact from '../Contact/Contact';
import Crouse from '../Crouse/Crouse';
import Services from '../Crouse/Services';
import HeroSection from '../HeroSection/HeroSection';
import Tastomonial from '../Tastomonial/Tastomonial';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Crouse />
            <Services />
            <HeroSection />
            <Tastomonial />
            <Contact />
        </div>
    );
};

export default Home;