import "./scss/Kencrystal.css";
import React, { useState, Component } from "react";
import Home from "./components/pages/Home";
// import LoginForm from "./components/pages/Login";
import WOW from "wowjs";
// import { render } from "react-dom";
// function Kencrystal() {
//   new WOW.WOW({
//     live: false,
//   }).init();
//   const adminUser = {
//     email: "tmphuongk57.contact@gmail.com",
//     password: "MinhPhuong123a@",
//   };

//   const [user, setUser] = useState({ name: "", email: "" });
//   const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log(details);
//     if (
//       details.email == adminUser.email &&
//       details.password == adminUser.password
//     ) {
//       setUser({
//         name: details.name,
//         email: details.email,
//       });
//     } else {
//       console.log("Details do not match..!");
//       alert("Details do not match..!");
//       setError("Login failed...!");
//     }
//   };
//   const Logout = () => {
//     setUser({ name: "", email: "" });
//   };
//   return (
//     <div className="container">
//       {user.email != "" ? (
//         <div>
//           <Home />
//         </div>
//       ) : (
//         <LoginForm Login={Login} error={error} />
//       )}
//     </div>
//   );
// }
// export default Kencrystal;
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
