import React from "react";
import Introduce from "./About";
function Header() {
  return (
    <div>
      <div className="logo__responsive">
        <a
          href="/#"
          className="logo__responsive--link wow animate__fadeInUp"
          data-wow-duration="0.4s"
          data-wow-delay="0.2s"
        >
          Ken<span className="coral">Cry</span>stal
        </a>
      </div>
      <Introduce />
    </div>
  );
}

export default Header;
