import React from "react";
import { navbarResponsive } from "../../static/data/navbar";
import ScrollToTop from "../ScrollToTop";
function NavbarResponsive() {
    const RenderNavbarResponsive = () => {
        return navbarResponsive.map((item, index) => {
            return (
                <li className="wrapper__responsive--li" key={index}>
                    <a className="wrapper__responsive--link" href={item.link}>
                        {item.name}
                    </a>
                </li>
            );
        });
    };
    return (
        <menu className="navbar_responsive">
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="navbar-btn">
                <i className="fas fa-bars"></i>
            </label>
            <div className="wrapper__responsive">
                <ul className="wrapper__responsive--ul">
                    <RenderNavbarResponsive />
                </ul>
                <ScrollToTop />
            </div>
        </menu>
    );
}

export default NavbarResponsive;
