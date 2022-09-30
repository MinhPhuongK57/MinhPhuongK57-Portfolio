import React from "react";
import { menuLinkCenter, menuLinkRight } from "../../static/data/menu";
const Menu = () => {
    const RenderMenuCenter = () => {
        return menuLinkCenter.map((item, index) => {
            return (
                <li key={index} className="menu__website--li">
                    <a
                        href={item.link}
                        className="menu__website--link wow animate__fadeInDown"
                        data-wow-duration="0.4s"
                        data-wow-delay="0.3s"
                    >
                        {item.name}
                    </a>
                </li>
            );
        });
    };
    const RenderMenuRight = () => {
        return menuLinkRight.map((item, index) => (
            <a
                key={index}
                href={item.link}
                className={item.className}
                data-wow-duration={item.duration}
                data-wow-delay={item.delay}
                data-title={item.dataTitle}
                target="_blank"
                rel="noreferrer"
            >
                <i className={item.icon}></i>
            </a>
        ));
    };
    const RenderLogo = () => {
        return (
            <a
                href="MinhPhuongK57-Portfolio"
                className="logo__page wow animate__fadeInBottomLeft"
                data-wow-duration="0.4s"
                data-wow-delay="0.2s"
            >
                Ken<span className="coral">Cry</span>stal
            </a>
        );
    };

    return (
        <div className="menu__website">
            <div className="container__menu">
                <RenderLogo />
                <ul className="menu__website--main">
                    <RenderMenuCenter />
                </ul>
                <div className="menu__website--list">
                    <RenderMenuRight />
                </div>
            </div>
        </div>
    );
};

export default Menu;
