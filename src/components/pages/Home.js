import React from "react";

import Sliders from "./home/slider_header/Sliders";
import MenuResponsive from "./home/Menu__Responsive";
import Header from "./home/Header";
import Menu from "./home/Menu";
import Feature from "./home/Features";
import Experience from "./home/Experiences";
import CV from "./home/CV";
import Product from "./home/Products";
import Slider from "./home/Slider_Personalities";
import Footer from "./home/Footer";
import ScrollToTop from "./home/ScrollToTop";

function Home() {
  return (
    <div>
      <MenuResponsive />
      <Sliders />
      <Header />
      <Menu />
      <Feature />
      <Experience />
      <CV />
      <Product />
      <Slider />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
