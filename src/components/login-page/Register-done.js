import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function RegisterDone() {
  const history = useHistory();
  const navigateTo = () => history.push("/login");
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login">
        <h4>REGISTER SUCESS !</h4>
        <br/>
        <button onClick={navigateTo}>Back to login</button>
        <br />
        <br />
      </form>
    </div>
  );
}
