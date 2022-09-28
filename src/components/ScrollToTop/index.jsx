import React, { Component } from "react";
class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
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
