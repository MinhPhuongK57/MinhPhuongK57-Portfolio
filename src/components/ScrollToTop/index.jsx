import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleBtnBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1500,
            delay: 100,
            smooth: 'easeInOutQuint',
            containerId: 'ContainerElementID',
        });
    };

    return (
        <>
            {showButton && (
                <button onClick={handleBtnBackToTop} id='btn__scrollToTop' type='button'>
                    <i className='far fa-arrow-alt-circle-up'></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
