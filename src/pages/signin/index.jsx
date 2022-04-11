import React from "react";

function LoginForm() {
  return (
    <div className="container">
      <div className="login">
        <div className="login-logo">
          Ken<span className="coral">Cry</span>stal
        </div>
        <h2 className="login-header">
          <span className="coral">Log</span>in
        </h2>
        <form className="login__form">
          <div className="login__form--content">
            <input
              type="text"
              placeholder=" "
              name="name"
              id="name"
              className="form-input"
              autoComplete="Off"
            />
            <label className="form-label">Name</label>
          </div>
          <div className="login__form--content">
            <input
              type="email"
              placeholder=" "
              name="email"
              id="email"
              className="form-input"
              autoComplete="Off"
            />
            <label className="form-label">Email</label>
          </div>
          <div className="login__form--content">
            <input
              type="password"
              placeholder=" "
              name="password"
              id="password"
              className="form-input"
              autoComplete="Off"
            />
            <label className="form-label">Password</label>
          </div>
          <a href="#/" className="login__form--forgot">
            Fotgot password ?
          </a>
          <p className="login__form--line">OR</p>
          <div className="login-list">
            <a href="#/" className="login-list--link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#/" className="login-list--link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#/" className="login-list--link">
              <i className="fab fa-google-plus"></i>
            </a>
          </div>
          <button type="submit" id="login" className="login__form--btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
// import React, { useState } from 'react';

// function LoginForm({Login, error}) {
//   const [details, setDetails] = useState({name: "", email: "", password: ""});

//   const submitHandler = e => {
//     e.preventDefault();

//     Login(details);
//   }
//     return (
//       <div className = "container">
//         <div className="login">
//             <div className="login-logo">Ken<span className="coral">Cry</span>stal</div>
//             <h2 className="login-header"><span className="coral">Log</span>in</h2>
//             {(error != "") ? ( <div className="login-error">{error}</div>) : ""}
//             <form className="login__form" onSubmit={submitHandler}>
//                 <div className="login__form--content">
//                     <input type="text" placeholder=" " name="name" id="name" className="form-input" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} autoComplete="Off"/>
//                     <label className="form-label">Name</label>
//                 </div>
//                 <div className="login__form--content">
//                     <input type="email" placeholder=" " name="email" id="email" className="form-input" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} autoComplete="Off"/>
//                     <label className="form-label">Email</label>
//                 </div>
//                 <div className="login__form--content">
//                     <input type="password" placeholder=" " name="password" id="password" className="form-input" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} autoComplete="Off"/>
//                     <label className="form-label">Password</label>
//                 </div>
//                 <a href="#/" className="login__form--forgot">Fotgot password ?</a>
//                 <p className="login__form--line">OR</p>
//                 <div className="login-list">
//                   <a href="#/" className="login-list--link"><i className="fab fa-facebook"></i></a>
//                   <a href="#/" className="login-list--link"><i className="fab fa-twitter"></i></a>
//                   <a href="#/" className="login-list--link"><i className="fab fa-google-plus"></i></a>
//                 </div>
//                 <button type="submit" className="login__form--btn">Login</button>
//             </form>
//         </div>
//       </div>
//     )
// }

// export default LoginForm;
