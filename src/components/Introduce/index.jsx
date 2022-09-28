import React from "react";
const Introduce = () => {
    return (
        <div className="page">
            <div className="page__container">
                <div id="popup-article" className="popup">
                    <div className="popup__block">
                        <a href="/MinhPhuongK57-Portfolio" className="popup__titleh1">
                            Ken<span className="coral">Cry</span>Stal
                        </a>
                        <p className="popup__title">
                            <br />
                            This is a personal website written by
                            <strong title="Trần Minh Phường"> myself</strong> in basic
                            <strong title="React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications">
                                &nbsp;ReactJS
                            </strong>
                            , introducing myself and my abilities in the information
                            technology industry.
                            <br />
                            <br />
                            The effort every day in me to complete the assigned tasks under
                            great pressure, hopefully, it is also an interesting experience
                            for me to step to my success step by step.
                        </p>
                        <a href="/MinhPhuongK57-Portfolio/" className="popup__close">
                            close
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
