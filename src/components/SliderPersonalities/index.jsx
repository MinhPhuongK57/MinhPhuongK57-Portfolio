import React from "react";
import { slidePersonalities } from "../../static/data/personalities";
function Slider() {
  const RenderSlidePersonalities = () => {
    return slidePersonalities.map((item, index) => {
      return (
        <div
          key={index}
          className="slider__contents wow animate__fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.2s"
        >
          <i className={item.icon}></i>
          <h2
            className="slider__caption wow animate__fadeInUp"
            data-wow-duration="0.25s"
            data-wow-delay="0.25s"
          >
            <span className="coral">{item.firstColor}</span>
            {item.lastColor}
          </h2>
          <p
            className="slider__txt wow animate__fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.25s"
          >
            {item.description}
          </p>
        </div>
      );
    });
  };
  const RenderBannerImage = () => {
    return (
      <div className="banner">
        <span className="banner-content">
          <p
            className="banner-content--description wow animate__fadeInLeft"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            "Genius is one percent inspiration and ninety-nine
            percentperspiration."
          </p>
          <strong
            className="banner-content--title wow animate__fadeInRight"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            __Thomas edison__
          </strong>
          <span className="banner-logo">
            Ken<span className="coral">Cry</span>
            <span className="success">stal</span>
          </span>
        </span>
      </div>
    );
  };
  return (
    <div className="container">
      <RenderBannerImage />
      <div className="slider">
        <input
          type="radio"
          name="slider"
          title="slider1"
          className="slider__nav"
          defaultChecked
        />
        <input
          type="radio"
          name="slider"
          title="slider2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slider3"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slider4"
          className="slider__nav"
        />
        <div className="slider__inner">
          <RenderSlidePersonalities />
        </div>
      </div>
    </div>
  );
}

export default Slider;
