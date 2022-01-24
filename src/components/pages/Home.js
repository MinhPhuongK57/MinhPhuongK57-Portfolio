import React, { Component } from "react";

import Sliders from "./home/Sliders-Header/Sliders";
import MenuResponsive from "./home/Menu-responsive";
import Header from "./home/Header";
import Menu from "./home/Menu";
import Grid from "./home/Grid";
import Slider from "./home/Slider";
import Footer from "./home/Footer";
import ScrollToTop from "./home/ScrollToTop";

function Home() {
  return (
    <div>
      <MenuResponsive />
      <Sliders />
      <Header />
      <Menu />
      <Grid />
      <Slider />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
