import React, { useState } from "react";

function ScrollToTop() {
  const initialState = {
    is_visible: false,
  };

  const [setStatus] = useState(initialState);

  const componentDidMount = () => {
    //Tạo ra thành phần gắn kết "scroll", gọi khi lần đầu hiển thị.
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  };

  const toggleVisibility = () => {
    //Đổi cách hiển thị, khi scroll đến vị trí lớn hơn 250px thì status =  true.
    if (window.pageYOffset > 250) {
      setStatus = false;
    } else {
      setStatus = true;
    }
  };

  const scrollToTop = () => {
    //Cuộn trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: "ContainerElementID",
    });
  };

  return (
    <div>
      {setStatus && (
        <div onClick={() => this.scrollToTop()}>
          <button id="btn__go-up" type="button">
            <i className="far fa-arrow-alt-circle-up"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
