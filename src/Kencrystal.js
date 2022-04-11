import "./scss/Kencrystal.css";
import React, { Component } from "react";
import Home from "./pages/homepage";
// import LoginForm from "./components/pages/Login";
import WOW from "wowjs";
class Kencrystal extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div className="container" componentDidMount>
        <Home />
        {/* <LoginForm /> */}
      </div>
    );
  }
}
export default Kencrystal;
