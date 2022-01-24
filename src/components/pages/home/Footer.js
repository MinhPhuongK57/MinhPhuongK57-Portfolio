import React from "react";
import FormContact from "./FormContact";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div
          className="footer__contact  wow animate__fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.1s"
        >
          <h4 className="footer__contact--title">
            If you have any questions, you can leave a message
          </h4>
          <FormContact />
        </div>
        <h2
          className="footer-logo wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.2s"
        >
          Ken<span className="coral">Cry</span>stal
        </h2>
        <p
          className="footer-title  wow animate__fadeInUp"
          data-wow-duration="0.4s"
          data-wow-delay="0.3s"
        >
          Follow
        </p>
        <div className="footer__list">
          <a
            href="https://www.facebook.com/TranMinhPhuong.coder.it.k57"
            data1-title="Facebook"
            className="footer__list--link wow animate__fadeInLeft"
            data-wow-duration="0.3s"
            data-wow-delay="0.35s"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/minhphuongk57/"
            data1-title="LinkedIn"
            className="footer__list--link wow animate__fadeInLeft"
            data-wow-duration="0.3s"
            data-wow-delay="0.35s"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/MinhPhuongK57"
            className="footer__list--link"
            data1-title="Github"
          >
            <i
              className="fab fa-github wow animate__fadeInUp"
              data-wow-duration="0.3s"
              data-wow-delay="0.35s"
            ></i>
          </a>
          <a
            href="https://dribbble.com/MinhPhuongK57"
            className="footer__list--link"
            data1-title="Dribbble"
          >
            <i
              className="fab fa-dribbble wow animate__fadeInRight"
              data-wow-duration="0.3s"
              data-wow-delay="0.35s"
            ></i>
          </a>
          <a
            href="https://www.behance.net/minhphngtrn1/editor"
            data1-title="Behance"
            className="footer__list--link wow animate__fadeInRight"
            data-wow-duration="0.3s"
            data-wow-delay="0.35s"
          >
            <i className="fab fa-behance"></i>
          </a>
        </div>
        <a
          href="/#"
          className="footer-email wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.4s"
          data1-title="MinhPhuongK57.coder.it@gmail.com"
        >
          MinhPhuongK57.coder.it@gmail.com
        </a>
        <p
          className="footer-copy wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.45s"
          title="Trần Minh Phường"
        >
          TranMinhPhuong
        </p>
      </div>
    </div>
  );
}

export default Footer;
