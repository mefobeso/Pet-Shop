import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function ResetDone() {
  const history = useHistory();
  const navigateTo = () => history.push("/login");
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">
        <h4>PASSWORD CHANGED !</h4>

        <button onClick={navigateTo}>Back to login</button>
        <br />
        <br />
      </form>
    </div>
  );
}
