import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
export default function Login(props) {
  const history = useHistory();
  const navigateTo = () => history.push("/home");
  const submitHandler = (event) => {
    event.preventDefault();
    props.logInHandler();
  };
  return (
    <div className="bg">
      <div className="login-container">
        <div className="login-background"></div>

        <form className="login" onSubmit={submitHandler}>
          <button className="back" onClick={navigateTo}>
            {"X"}
          </button>
          <h2>LOGIN</h2>
          <br />
          <br />
          <input
            type="text"
            className="login-input username"
            placeholder="Username"
          />
          <br />
          <input
            type="text"
            className="login-input password"
            placeholder=" Password"
          />
          <br />
          <br />
          <button type="submit">Log in</button>
          <br />
          <br />
          <a href="/reset" className="login-link">
            CAN'T SIGN IN ?
          </a>
          <a href="/register" className="login-link">
            CREATE ACCOUNT
          </a>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
