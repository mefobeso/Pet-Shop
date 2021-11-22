import React, { useRef, useState, useEffect } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import userData from "../../database/user";
export default function Login(props) {
  // Variable

  const history = useHistory();
  const navigateTo = () => history.goBack();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userAvailable, setUserAvailable] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  useEffect(() => {
    setFormIsValid(
      enteredUsername.trim().length > 7 && enteredPassword.trim().length > 6
    );
  }, [enteredUsername, enteredPassword]);
  useEffect(() => {
    userData.map((user) => {
      setUserAvailable(user.username === enteredUsername);
    });
  }, [enteredUsername]);
  // Function

  const usernameChangeHanlder = (event) => {
    setEnteredUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredPassword("");
    if (!userAvailable) {
      setErrorMessage("User not available !");
    }
    if (!usernameValid) {
      setErrorMessage("Username is invalid !");
    }
    if (formIsValid && userAvailable) {
      navigateTo();
    }

    props.onLogin(enteredUsername, enteredPassword);
  };

  // Validation

  const validateUsername = () => {
    setUsernameValid(enteredUsername.trim().length > 7);
  };
  const validatePassword = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
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
            value={enteredUsername}
            onChange={usernameChangeHanlder}
            onBlur={validateUsername}
          />
          {!userAvailable ? <p className="error">{errorMessage}</p> : <br />}
          <input
            type="password"
            className={passwordValid ? "login-input" : "login-input invalid"}
            placeholder=" Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
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
