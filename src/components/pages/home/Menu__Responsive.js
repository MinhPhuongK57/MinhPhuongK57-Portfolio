import React from "react";

function MenuResponsive() {
  return (
    <div>
      <div className="menu_responsive">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <div className="wrapper__responsive">
          <ul className="wrapper__responsive--ul">
            <li className="wrapper__responsive--li">
              <a className="wrapper__responsive--link" href="/#content">
                home
              </a>
            </li>
            <li className="wrapper__responsive--li">
              <a className="wrapper__responsive--link" href="/#">
                features
              </a>
            </li>
            <li className="wrapper__responsive--li">
              <a className="wrapper__responsive--link" href="/#popup-article">
                introduce
              </a>
            </li>
            <li className="wrapper__responsive--li">
              <a className="wrapper__responsive--link" href="/#">
                experience
              </a>
            </li>
            <li className="wrapper__responsive--li">
              <a className="wrapper__responsive--link" href="/#content1">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuResponsive;
