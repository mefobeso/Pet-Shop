import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function ResetCode() {
  const history = useHistory();
  const navigateTo = () => history.push("/reset-form");
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">
        <p className="login-title">RESET PASSWORD</p>
        <br />
        <br />
        <p>Enter code sent to your email :</p>
        <input type="text" className="login-input" />
        <br />
        <button onClick={navigateTo}>Confirm</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}
