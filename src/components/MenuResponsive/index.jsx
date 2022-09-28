import React from "react";
import { menuResponsive } from "../../static/data/menu";
function MenuResponsive() {
    const RenderMenuResponsive = () => {
        return menuResponsive.map((item, index) => {
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
        <div>
            <div className="menu_responsive">
                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="wrapper__responsive">
                    <ul className="wrapper__responsive--ul">
                        <RenderMenuResponsive />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuResponsive;
