import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import SliderImages from "../../static/data/slider-images";

const ken = SliderImages.length - 1;

function Sliders() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === ken ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="sliders">
      <SliderContent activeIndex={activeIndex} SliderImages={SliderImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? ken : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === ken ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        SliderImages={SliderImages}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Sliders;
