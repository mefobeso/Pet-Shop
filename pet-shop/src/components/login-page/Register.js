import React from "react";
import "./sass/css/login.css";
export default function Register() {
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">
        <p className="login-title">REGISTER</p>
        <input
          type="text"
          className="login-input username"
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          className="login-input password"
          placeholder="Password"
        />
        <br />
        <input
          type="text"
          className="login-input confirmpassword"
          placeholder="Confirm Password"
        />
        <br />
        <input
          type="text"
          className="login-input confirmpassword"
          placeholder="Email"
        />
        <br />
        <br />
        <button>Next</button>
        <br />
        <br />
        <a href="/login" className="login-link">
          ALREADY HAVE AN ACCOUNT ?
        </a>
        <br />
        <br />
      </form>
    </div>
  );
}
