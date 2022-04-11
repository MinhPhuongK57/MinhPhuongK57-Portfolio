import React from "react";
import FormContact from "../FormContact";
import { footerIcon } from "../../static/data/footer";
function Footer() {
  const RenderFooterIcon = () => {
    return (
      <>
        {footerIcon.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              data1-title={item.dataTitle}
              className={item.className}
              data-wow-duration={item.duration}
              data-wow-delay={item.delay}
              target="_blank"
              rel="noreferrer"
            >
              <i className={item.icon}></i>
            </a>
          );
        })}
      </>
    );
  };
  return (
    <div className="container" id="contact__me">
      <div className="footer">
        <div
          className="footer__contact  wow animate__fadeInUp"
          data-wow-duration="0.2s"
          data-wow-delay="0.1s"
        >
          <h4 className="footer__contact--title">
            This is an incomplete function
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
          <RenderFooterIcon />
        </div>
        <a
          href="mailto: minhphuongk57.dev@gmail.com"
          className="footer-email wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.4s"
          data1-title="minhphuongk57.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          minhphuongk57.dev@gmail.com
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
