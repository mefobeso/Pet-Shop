import React, { useRef, useState, useEffect } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import userData from "../../database/user.data";
export default function Login(props) {
  // Variable

  const history = useHistory();
  const navigateTo = () => history.goBack();

  // State
  const [errorMessage, setErrorMessage] = useState("");
  const [userAvailable, setUserAvailable] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  // Ref
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  // useEffect

  useEffect(() => {
    setFormIsValid(
      usernameInputRef.current.value.trim().length > 7 &&
        passwordInputRef.current.value.trim().length > 6
    );
  }, [usernameInputRef.current.value, passwordInputRef.current.value]);

  useEffect(() => {
    userData.map((user) => {
      setUserAvailable(user.username === usernameInputRef.current.value);
    });
  }, [usernameInputRef.current.value]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!userAvailable) {
      setErrorMessage("User not available !");
    }
    if (!usernameValid) {
      setErrorMessage("Username is invalid !");
    }
    if (formIsValid && userAvailable) {
      navigateTo();
    }
    props.onLogin(
      usernameInputRef.current.value,
      passwordInputRef.current.value
    );
    usernameInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  // Validation

  const validateUsername = () => {
    setUsernameValid(usernameInputRef.current.value.trim().length > 7);
  };
  const validatePassword = () => {
    setPasswordValid(passwordInputRef.current.value.trim().length > 6);
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
          <input
            type="text"
            className={usernameValid ? "login-input" : "login-input invalid"}
            placeholder="Username"
            onChange={validateUsername}
            ref={usernameInputRef}
          />
          {!userAvailable ? <p className="error">{errorMessage}</p> : <br />}
          <input
            type="password"
            className={passwordValid ? "login-input" : "login-input invalid"}
            placeholder=" Password"
            onChange={validatePassword}
            ref={passwordInputRef}
          />
          <br />

          <button type="submit" disabled={!formIsValid}>
            Log in
          </button>
          <br />
          <a href="/reset" className="login-link">
            CAN'T SIGN IN ?
          </a>
          <a href="/register" className="login-link">
            CREATE ACCOUNT
          </a>
          <br />
        </form>
      </div>
    </div>
  );
}
