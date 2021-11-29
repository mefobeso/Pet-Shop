import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function RegisterCode() {
  const history = useHistory();
  const navigateTo = () => history.push("/register-done");
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">

        <p>Enter code sent to your email :</p>
        <input type="text" className="login-input" />
        <br />
        <button onClick={navigateTo}>Confirm</button>

        <br />
        <br />
      </form>
    </div>
  );
}
