import "./styles/app.scss";
import React, { Component } from "react";
import Home from "./pages/homepage";
import WOW from "wowjs";
class App extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false,
        }).init();
    }
    render() {
        return (
            <div className="container">
                <Home />
            </div>
        );
    }
}
export default App;
