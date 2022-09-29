import React, { useEffect, useState } from "react";
const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
            containerId: "ContainerElementID",
        });
    }

    return (
        <div>
            {showButton && (
                <div onClick={backToTop}>
                    <button id="btn__go-up" type="button">
                        <i className="far fa-arrow-alt-circle-up"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default ScrollToTop;
