import React from "react";
import Sliders from "../../components/SliderHeader/Sliders";
import NavbarResponsive from "../../components/NavbarResponsive";
import Introduce from "../../components/Introduce";
import Navbar from "../../components/Navbar";
import Feature from "../../components/Feature";
import CV from "../../components/CV";
import Product from "../../components/Product";
import Slider from "../../components/SliderPersonalities";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

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
