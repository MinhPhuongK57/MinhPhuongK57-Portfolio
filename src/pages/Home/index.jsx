import React from "react";
import Sliders from "../../components/SliderHeader/Sliders";
import MenuResponsive from "../../components/MenuResponsive";
import Introduce from "../../components/Introduce";
import Menu from "../../components/Menu";
import Feature from "../../components/Feature";
import CV from "../../components/CV";
import Product from "../../components/Product";
import Slider from "../../components/SliderPersonalities";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

function Home() {
    return (
        <div>
            <MenuResponsive />
            <Sliders />
            <Introduce />
            <Menu />
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
