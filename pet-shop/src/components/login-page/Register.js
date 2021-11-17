import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function Register() {
  const history = useHistory();
  const navigateTo = () => history.push("/register-code");
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
        <button onClick={navigateTo}>Next</button>
        <p>______________________________</p>
        <button onClick={navigateTo} className="login-FB">Facebook</button>

        <button onClick={navigateTo} className="login-GG">Google</button>
        <p>______________________________</p>

        <a href="/login" className="login-link">
          ALREADY HAVE AN ACCOUNT ?
        </a>
        <br />

      </form>
    </div>
  );
}
