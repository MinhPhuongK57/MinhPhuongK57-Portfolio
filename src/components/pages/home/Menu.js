import React, { Component } from "react";

function Menu() {
  return (
    <div className="menu__website">
      <div className="container__menu">
        <a
          href="/KenCrystalK57/#"
          className="logo__page wow animate__fadeInBottomLeft"
          data-wow-duration="0.4s"
          data-wow-delay="0.2s"
        >
          Ken<span className="coral">Cry</span>stal
        </a>
        <ul className="menu__website--main">
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#home__me"
              className="menu__website--link wow animate__fadeInLeft"
              data-wow-duration="0.3s"
              data-wow-delay="0.25s"
            >
              home
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#feature__me"
              className="menu__website--link wow animate__fadeInLeft"
              data-wow-duration="0.20s"
              data-wow-delay="0.15s"
            >
              features
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#experience__me"
              className="menu__website--link wow animate__fadeInUp"
              data-wow-duration="0.20s"
              data-wow-delay="0.15s"
            >
              experiences
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#cv__me"
              className="menu__website--link wow animate__fadeInUp"
              data-wow-duration="0.15s"
              data-wow-delay="0.10s"
            >
              cv
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#products__me"
              className="menu__website--link wow animate__fadeInUp"
              data-wow-duration="0.20s"
              data-wow-delay="0.15s"
            >
              products
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#popup-article"
              className="menu__website--link wow animate__fadeInRight"
              data-wow-duration="0.25s"
              data-wow-delay="0.20s"
            >
              about
            </a>
          </li>
          <li className="menu__website--li">
            <a
              href="/KenCrystalK57/#contact__me"
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
            href="https://www.facebook.com/minhphuongk57/"
            className="menu__list--icon wow animate__fadeInBottomRight"
            data-wow-duration="0.2s"
            data-wow-delay="0.2s"
            data-title="Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/minhphuongk57/"
            className="menu__list--icon wow animate__fadeInBottomRight"
            data-wow-duration="0.23s"
            data-wow-delay="0.23s"
            data-title="LinkedIn"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/MinhPhuongK57"
            className="menu__list--icon wow animate__fadeInBottomRight"
            data-wow-duration="0.27s"
            data-wow-delay="0.27s"
            data-title="Github"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://dribbble.com/MinhPhuongK57"
            className="menu__list--icon wow animate__fadeInBottomRight"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
            data-title="Dribbble"
            target="_blank"
          >
            <i className="fab fa-dribbble"></i>
          </a>
          <a
            href="https://www.behance.net/minhphuongk57"
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

export default Menu;
