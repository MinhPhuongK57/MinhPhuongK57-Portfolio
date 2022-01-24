import React from "react";

function Slider() {
  const listSlides = [
    {
      id: 1,
      icon: "slider__image fab fa-codepen",
      firstColor: "char",
      lastColor: "acter",
      description:
        "Sow athought, and you reap an act. Sow an act, and you reap a habit. Sow a habit, and you reap a character. Sow a character, and you reap a destiny.",
      status: true,
    },
    {
      id: 2,
      icon: "slider__image fas fa-graduation-cap",
      firstColor: "peri",
      lastColor: "ence",
      description:
        "Sow athought, and you reap an act. Sow an act, and you reap a habit. Sow a habit, and you reap a character. Sow a character, and you reap a destiny.",
      status: true,
    },
    {
      id: 3,
      icon: "slider__image fab fa-codepen",
      firstColor: "evis",
      lastColor: "ion",
      description:
        "Sow athought, and you reap an act. Sow an act, and you reap a habit. Sow a habit, and you reap a character. Sow a character, and you reap a destiny.",
      status: true,
    },
    {
      id: 4,
      icon: "slider__image fas fa-graduation-cap",
      firstColor: "dia",
      lastColor: "mond",
      description:
        "Sow athought, and you reap an act. Sow an act, and you reap a habit. Sow a habit, and you reap a character. Sow a character, and you reap a destiny.",
      status: true,
    },
  ];
  let elements = listSlides.map((listSlide, index) => {
    let result = "";
    if (listSlide.status) {
      result = (
        <div
          key={index}
          className="slider__contents wow animate__fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.2s"
        >
          <i className={listSlide.icon}></i>
          <h2
            className="slider__caption wow animate__fadeInUp"
            data-wow-duration="0.25s"
            data-wow-delay="0.25s"
          >
            <span className="coral">{listSlide.firstColor}</span>
            {listSlide.lastColor}
          </h2>
          <p
            className="slider__txt wow animate__fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.25s"
          >
            {listSlide.description}
          </p>
        </div>
      );
    }
    return result;
  });
  return (
    <div className="container">
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
      <div className="slider">
        <input
          type="radio"
          name="slider"
          title="slide1"
          className="slider__nav"
          defaultChecked
        />
        <input
          type="radio"
          name="slider"
          title="slide2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide3"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide4"
          className="slider__nav"
        />
        <div className="slider__inner">{elements}</div>
      </div>
    </div>
  );
}

export default Slider;
