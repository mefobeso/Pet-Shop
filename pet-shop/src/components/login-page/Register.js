import React, { useRef, useState, useEffect } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import userData from "../../database/user.data";
import ErrorModal from "../UI/ErrorModal";
import { Fragment } from "react";
import { isUndefined } from "lodash";
export default function Register(props) {
  // Function
  var hasNumber = /\d/;

  // useHistory
  const history = useHistory();
  const navigateTo = () => history.push("./register-code");

  // State

  const [error, setError] = useState();
  const [userAvailable, setUserAvailable] = useState("@");
  const [formIsValid, setFormIsValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  // Ref
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");
  const confirmPasswordInputRef = useRef("");

  const enteredName = usernameInputRef.current.value;
  const enteredPassword = passwordInputRef.current.value;
  // useEffect

  useEffect(() => {
    setFormIsValid(
      usernameInputRef.current.value.trim().length > 7 &&
        passwordInputRef.current.value.trim().length > 6
    );
  }, [usernameInputRef.current.value, passwordInputRef.current.value]);

  useEffect(() => {
    setUserAvailable(
      userData.find((user) => user.username === usernameInputRef.current.value)
    );
  }, [usernameInputRef.current.value]);

  const submitHandler = (event) => {
    console.log(userAvailable);
    event.preventDefault();
    if (isUndefined(userAvailable) === false) {
      setError({
        title: "User available !",
        message: "Username already exist",
      });
      return;
    }
    if (
      enteredName.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input !",
        message: "Please enter a valid name and password (non empty-value)",
      });
      return;
    }
    if (!usernameValid) {
      setError({
        title: "User invalid !",
        message: "Username must have at least 6 characters",
      });
      return;
    }

    usernameInputRef.current.value = "";
    passwordInputRef.current.value = "";
    confirmPasswordInputRef.current.value = "";
  };

  // Validation

  const validateUsername = () => {
    setUsernameValid(usernameInputRef.current.value.trim().length > 7);
  };
  const validatePassword = () => {
    setPasswordValid(passwordInputRef.current.value.trim().length > 6);
  };
  const okayButtonHandler = () => {
    setError(null);
    setUserAvailable();
    console.log(userAvailable);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={okayButtonHandler}
        />
      )}
      <div className="login-container">
        <div className="login-background"></div>
        <form className="login" onSubmit={submitHandler}>
          <p className="login-title">REGISTER</p>
          <input
            type="text"
            className={usernameValid ? "login-input" : "login-input invalid"}
            placeholder="Username"
            onChange={validateUsername}
            ref={usernameInputRef}
          />
          <br />
          <input
            type="password"
            className={passwordValid ? "login-input" : "login-input invalid"}
            placeholder="Password"
            onChange={validatePassword}
            ref={passwordInputRef}
          />
          <br />
          <input
            type="password"
            className="login-input confirmpassword"
            placeholder="Confirm Password"
            ref={confirmPasswordInputRef}
          />
          <br />
          <input
            type="email"
            className="login-input confirmpassword"
            placeholder="Email"
          />
          <br />
          <button>Next</button>
          <p>______________________________</p>
          <button onClick={navigateTo} className="login-FB">
            Facebook
          </button>

          <button onClick={navigateTo} className="login-GG">
            Google
          </button>
          <p>______________________________</p>

          <a href="/login" className="login-link">
            ALREADY HAVE AN ACCOUNT ?
          </a>
          <br />
        </form>
      </div>
    </Fragment>
  );
}
