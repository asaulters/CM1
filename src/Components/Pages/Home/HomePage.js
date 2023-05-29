import React from 'react';
import Header from '../../UI/Header';
import Hero from './Hero/Hero';
import MenuSection from './Menu Section/MenuSection';
import ContactSection from '../../Shared/Contact/ContactSection';
import Footer from '../../UI/Footer';
import Carousel from './Carousel/Carousel';
import Events from '../Home/EventandReservation/Events';
import About from './AboutSection/About';

const HomePage = () => {
    return (
        <div>
            <div className="page-content home-sections">

            <Hero />
            <About />
            <MenuSection />
            <Events />
            <Carousel />
            </div>
        </div>
    );
}

export default HomePage;