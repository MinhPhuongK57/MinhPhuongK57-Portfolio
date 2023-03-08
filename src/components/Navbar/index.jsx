import { navbarLinkCenter, navbarLinkRight } from '../../static/data/navbar';

import Logo from 'elements/Logo';
import React from 'react';

const Navbar = () => {
    const RenderNavbarCenter = () => {
        return navbarLinkCenter.map((item, index) => {
            return (
                <li key={index} className='navbar__website--li'>
                    <a
                        href={item.link}
                        className='navbar__website--link wow animate__fadeInDown'
                        data-wow-duration='0.4s'
                        data-wow-delay='0.3s'
                    >
                        {item.name}
                    </a>
                </li>
            );
        });
    };
    const RenderNavbarRight = () => {
        return navbarLinkRight.map((item, index) => (
            <a
                key={index}
                href={item.link}
                className={item.className}
                data-wow-duration={item.duration}
                data-wow-delay={item.delay}
                data-title={item.dataTitle}
                target='_blank'
                rel='noreferrer'
            >
                <i className={item.icon}></i>
            </a>
        ));
    };
    const RenderLogo = () => {
        return (
            <a
                href='/MinhPhuongK57-Portfolio/#'
                className='logo__page wow animate__fadeInBottomLeft disabled__className'
                data-wow-duration='0.4s'
                data-wow-delay='0.2s'
            >
                <Logo />
            </a>
        );
    };

    return (
        <menu className='navbar__website'>
            <div className='container__navbar'>
                <RenderLogo />
                <ul className='navbar__website--main'>
                    <RenderNavbarCenter />
                </ul>
                <div className='navbar__website--list'>
                    <RenderNavbarRight />
                </div>
            </div>
        </menu>
    );
};

export default Navbar;
