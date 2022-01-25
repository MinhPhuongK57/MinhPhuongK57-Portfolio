import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev-s" onClick={prevSlide}>
        <i className="fas fa-long-arrow-alt-left"></i>
      </span>
      <span className="next-s" onClick={nextSlide}>
        <i className="fas fa-long-arrow-alt-right"></i>
      </span>
    </div>
  );
}

export default Arrows;
