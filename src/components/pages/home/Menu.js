import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu__website">
        <div className="container__menu">
          <a
            href="index.html"
            className="logo__page wow animate__fadeInBottomLeft"
            data-wow-duration="0.4s"
            data-wow-delay="0.2s"
          >
            Ken<span className="coral">Cry</span>stal
          </a>
          <ul className="menu__website--main">
            <li className="menu__website--li">
              <a
                href="/#"
                className="menu__website--link wow animate__fadeInLeft"
                data-wow-duration="0.3s"
                data-wow-delay="0.25s"
              >
                home
              </a>
            </li>
            <li className="menu__website--li">
              <a
                href="/#"
                className="menu__website--link wow animate__fadeInLeft"
                data-wow-duration="0.25s"
                data-wow-delay="0.20s"
              >
                features
              </a>
            </li>
            <li className="menu__website--li">
              <a
                href="/#popup-article"
                className="menu__website--link wow animate__fadeInUp"
                data-wow-duration="0.2s"
                data-wow-delay="0.15s"
              >
                introduce
              </a>
            </li>
            <li className="menu__website--li">
              <a
                href="/#"
                className="menu__website--link wow animate__fadeInRight"
                data-wow-duration="0.25s"
                data-wow-delay="0.20s"
              >
                experience
              </a>
            </li>
            <li className="menu__website--li">
              <a
                href="/#"
                className="menu__website--link menu__website--link_last wow animate__fadeInRight"
                data-wow-duration="0.3s"
                data-wow-delay="0.25s"
              >
                contact
              </a>
            </li>
          </ul>
          <div className="menu__website--list">
            <a
              href="/https://www.facebook.com/TranMinhPhuong.coder.it.k57"
              className="menu__list--icon wow animate__fadeInBottomRight"
              data-wow-duration="0.2s"
              data-wow-delay="0.2s"
              data-title="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="/https://www.linkedin.com/in/minhphuongk57/"
              className="menu__list--icon wow animate__fadeInBottomRight"
              data-wow-duration="0.23s"
              data-wow-delay="0.23s"
              data-title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="/https://github.com/MinhPhuongK57"
              className="menu__list--icon wow animate__fadeInBottomRight"
              data-wow-duration="0.27s"
              data-wow-delay="0.27s"
              data-title="Github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="/https://dribbble.com/MinhPhuongK57"
              className="menu__list--icon wow animate__fadeInBottomRight"
              data-wow-duration="0.3s"
              data-wow-delay="0.3s"
              data-title="Dribbble"
            >
              <i className="fab fa-dribbble"></i>
            </a>
            <a
              href="/https://www.behance.net/minhphngtrn1/editor"
              className="menu__list--icon"
              data-title="Behance"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
