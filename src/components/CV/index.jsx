import React from "react";
import images from "../../images/MinhPhuong.png";
function CV() {
  return (
    <div className="container con_pad" id="cv">
      <div className="cv">
        <h2
          className="cv--title wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.2s"
        >
          Curriculum vitae
        </h2>
        <div className="cv--img">
          <img src={images} alt="CV" />
        </div>
      </div>
    </div>
  );
}
export default CV;
