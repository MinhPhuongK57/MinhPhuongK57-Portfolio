import CV from '../../components/CV';
import Contact from 'components/Contact';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import Introduce from '../../components/Introduce';
import MySkill from 'components/MySkill';
import Navbar from '../../components/Navbar';
import NavbarResponsive from '../../components/NavbarResponsive';
import Product from '../../components/Product';
import React from 'react';
import ScrollToTop from '../../components/ScrollToTop';
import Slider from '../../components/SliderPersonalities';
import Sliders from '../../components/SliderHeader/Sliders';

function Home() {
    return (
        <div>
            <NavbarResponsive />
            <Sliders />
            <Introduce />
            <Navbar />
            <Feature />
            <CV />
            <Product />
            <Slider />
            <MySkill />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Home;
