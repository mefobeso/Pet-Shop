import React, { useState } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function ResetForm() {
  const history = useHistory();
  const navigateTo = () => history.push("/reset-done");
  const { confirmPassword, setConfirmPassword } = useState(false);
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">
      <br />
        <p className="login-title">RESET PASSWORD</p>
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
        <br />
        <button onClick={confirmPassword&&navigateTo}>Next</button>
        <br />
        <br />
        <a href="/login" className="login-link">
          ALREADY HAVE AN ACCOUNT ?
        </a>
        <br />

      </form>
    </div>
  );
}
