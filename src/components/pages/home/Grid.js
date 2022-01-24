import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listquotes: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
          description:
            "Not everything of value in life comes from books- experience the world.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          description:
            "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness and Common sense.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          description:
            "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged. That's not the place to become discouraged.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          description:
            "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness and Common sense.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
          description:
            "Anything that won't sell, I don't want to invent. Its sale is proof of utility, and utility is success.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
          description:
            "When I have fully decided that a result is worth getting I go ahead of it and make trial after trial until it comes.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 7,
          image:
            "https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          description:
            "Many of life's failures are people who did not realize how close they were to success when they gave up.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 8,
          image:
            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          description:
            "The three great essentials to achieve anything worth while are: Hard work, Stick-to-itiveness and Common sense.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 9,
          image:
            "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
          description:
            "When I have fully decided that a result is worth getting I go ahead of it and make trial after trial until it comes.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 10,
          image:
            "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
          description:
            "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged. That's not the place to become discouraged.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 11,
          image:
            "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
          description:
            "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged.",
          name: "thomas edison",
          status: true,
        },
        {
          id: 12,
          image:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80",
          description:
            "Nearly every man who develops an idea works it up to the point where it looks impossible, and then he gets discouraged. That's not the place to become discouraged.",
          name: "thomas edison",
          status: true,
        },
      ],
    };
  }
  render() {
    let elements = this.state.listquotes.map((listquote, index) => {
      let result = "";
      if (listquote.status) {
        result = (
          <div key={index} className="grid__page--items">
            <img
              src={listquote.image}
              alt=""
              className="grid-images wow animate__backInUp"
              data-wow-duration="0.3s"
              data-wow-delay="0.2s"
            />
            <div
              className="grid-content wow animate__backInUp"
              data-wow-duration="0.4s"
              data-wow-delay="0.25s"
            >
              {listquote.description}
            </div>
            <p className="grid-title">{listquote.name}</p>
            <a href="/#" className="grid-btn">
              See more
            </a>
          </div>
        );
      }
      return result;
    });
    return (
      <div>
        <div className="search con_pad">
          <div></div>
          <div
            className="search-div1 wow animate__fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            Please search here, good sayings in life
          </div>
          <div
            className="search__content wow animate__fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            <input
              className="search__content--input"
              type="text"
              placeholder="Type to search..."
            />
            <a href="index.html" className="search__content--btn">
              <i className="search__content--icon fas fa-search"></i>
            </a>
          </div>
        </div>
        <div className="con_pad grid">
          <h2
            className="grid--title wow animate__fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            Quotes Thomas Edison
          </h2>
          <div className="grid__page">{elements}</div>
        </div>
      </div>
    );
  }
}

export default Grid;
