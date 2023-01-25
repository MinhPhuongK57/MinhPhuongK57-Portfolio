import React from "react";
import Images from "../../assets/MinhPhuong.png";
import Resume from "../../assets/MinhPhuong.pdf"
function CV() {
    return (
        <section className="container con_pad" id="cv">
            <div className="cv">
                <h2
                    className="cv--title wow animate__fadeInUp"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.2s"
                >
                    Curriculum vitae
                </h2>
                <a href={Resume} download className="cv--button wow animate__flipInX"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.2s">
                    Download the CV here
                </a>
                <div className="cv--img wow animate__pulse"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.2s">
                    <img src={Images} alt="CV" />
                </div>
            </div>
        </section>
    );
}
export default CV;
