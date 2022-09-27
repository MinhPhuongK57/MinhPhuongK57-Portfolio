import React from "react";

function SliderContent({ activeIndex, SliderImages }) {
  return (
    <section>
      {SliderImages.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slide active" : "inactive"}
        >
          <div className="sliders-content">
            <a
              href="/#"
              className="sliders-content--logo wow animate__fadeInDown"
              data-wow-duration="0.4s"
              data-wow-delay="0.2s"
            >
              Ken<span className="coral">Cry</span>stal
            </a>
          </div>
          <img className="sliders-image" src={slide.urls} alt={slide.urls} />
          <h2
            className="sliders-title wow animate__fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.2s"
          >
            {slide.title}
          </h2>
          <h3
            className="sliders-description wow animate__fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.2s"
          >
            {slide.description}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
