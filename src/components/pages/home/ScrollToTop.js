//Cách cũ khi dùng Jquery , kéo button scroll
// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(this).scrollTop()> 40){
//       $("#btn__go-up").fadeIn();
//     }
//     else{
//       $("#btn__go-up").fadeOut();
//     }
//   });

//   $("#btn__go-up").click(function(){
//     $("html,body").animate({scrollTop: 0},500);
//   });
// });

import React, { Component } from "react";

class ScrollToTop extends Component {
  constructor(props) {
    //Tạo ra method với status = false.
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    //Tạo ra thành phần gắn kết "scroll", gọi khi lần đầu hiển thị.
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    //Đổi cách hiển thị, khi scroll đến vị trí lớn hơn 250px thì status =  true.
    if (window.pageYOffset > 250) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    //Cuộn trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: "ContainerElementID",
    });
  }

  render() {
    //Output.
    const { is_visible } = this.state;
    return (
      <div>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <button id="btn__go-up" type="button">
              <i className="far fa-arrow-alt-circle-up"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollToTop;
