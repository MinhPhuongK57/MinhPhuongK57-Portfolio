import React from "react";
const Introduce = () => {
    return (
        <section className="page">
            <div className="page__container">
                <div id="popup-article" className="popup">
                    <div className="popup__block">
                        <a href="/MinhPhuongK57-Portfolio/#" className="popup__title">
                            Ken<span className="coral">Cry</span>Stal
                        </a>
                        <p className="popup__description">
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
                            You can see my CV in the <a href="/MinhPhuongK57-Portfolio/#cv"><strong title="Curriculum Vitae">Resume</strong></a> section, thanks a lot
                        </p>
                        <a href="/MinhPhuongK57-Portfolio/#" className="popup__close">
                            close
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
