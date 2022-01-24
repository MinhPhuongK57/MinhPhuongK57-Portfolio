import React from "react";

function Header() {
  return (
    <div>
      <div className="logo__responsive">
        <a
          href="index.html"
          className="logo__responsive--link wow animate__fadeInUp"
          data-wow-duration="0.4s"
          data-wow-delay="0.2s"
        >
          Ken<span className="coral">Cry</span>stal
        </a>
      </div>

      <div className="page">
        <div className="page__container">
          <div id="popup-article" className="popup">
            <div className="popup__block">
              <a href="/#" className="popup__titleh1">
                Ken<span className="coral">Cry</span>Stal
              </a>
              <p className="popup__title">
                Đây là website một góc học tập do{" "}
                <strong title="Trần Minh Phường">mình</strong> viết nhầm mục
                đích lưu trữ những kiến thức nền của việc học.
                <br /> Được viết bằng HTML | CSS & Javascript cơ bản.
                <br /> Rất cảm ơn vì đã được bạn chú ý đến...!
              </p>
              <a href="/#" className="popup__close">
                close
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
