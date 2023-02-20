import CV from '../../components/CV';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';
import Introduce from '../../components/Introduce';
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
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Home;
