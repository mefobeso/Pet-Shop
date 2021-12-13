import React, { useRef, useState, useEffect, useReducer } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import { isUndefined } from "lodash";
import emailjs from "emailjs-com";
// database
import userData from "../../database/user.data";
// css
import "./sass/css/login.css";

const usernameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 7,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 7,
    };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
export default function Register() {
  // Function
  // useHistory
  const history = useHistory();
  const navigateTo = () => history.push("./register-code");
  var num = Math.floor(Math.random() * 90000) + 10000;
  // State

  const [error, setError] = useState();
  const [userAvailable, setUserAvailable] = useState("@");
  const [formIsValid, setFormIsValid] = useState(false);

  // Reducer
  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  // Ref
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");
  const confirmPasswordInputRef = useRef("");
  // useEffect
  const { isValid: usernameValid } = usernameState;
  const { isValid: passwordValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(usernameValid && passwordValid);
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameValid, passwordValid]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setUserAvailable(
        userData.find((user) => user.username === usernameState.value)
      );
    }, 1000);
    return () => {
      clearTimeout(identifier);
    };
  }, [usernameState.value]);

  // Submit
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
    if (!usernameState.isValid) {
      setError({
        title: "User invalid !",
        message: "Username must have at least 6 characters",
      });
      return;
    }
    if (
      passwordInputRef.current.value !== confirmPasswordInputRef.current.value
    ) {
      setError({
        title: "Confirm password not math !",
        message: "Confirm password not math password !",
      });
      return;
    }
    if (formIsValid && isUndefined(userAvailable)) {
      navigateTo();
      localStorage.setItem("confirm-code", num);
      emailjs
        .sendForm(
          "service_1eeuc2n",
          "template_os13rfb",
          event.target,
          "user_2pSkLWGAoy0gctE4e09sW"
        )
        .then(
          (result) => {},
          (error) => {
            console.log(error.text);
          }
        );
    }
    usernameInputRef.current.value = "";
    passwordInputRef.current.value = "";
    confirmPasswordInputRef.current.value = "";
  };

  // Validation

  const validateUsername = () => {
    dispatchUsername({
      type: "INPUT_BLUR",
    });
  };
  const validatePassword = () => {
    dispatchPassword({
      type: "INPUT_BLUR",
    });
  };
  const usernameChangeHandler = () => {
    dispatchUsername({
      type: "USER_INPUT",
      val: usernameInputRef.current.value,
    });
  };
  const passwordChangeHandler = () => {
    dispatchPassword({
      type: "USER_INPUT",
      val: passwordInputRef.current.value,
    });
  };
  const okayButtonHandler = () => {
    setError(null);
    setUserAvailable();
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
            className={
              usernameState.isValid === false
                ? "login-input invalid"
                : "login-input"
            }
            placeholder="Username"
            onChange={usernameChangeHandler}
            onBlur={validateUsername}
            ref={usernameInputRef}
            name="to_name"
          />
          <br />
          <input
            type="password"
            className={
              passwordState.isValid === false
                ? "login-input invalid"
                : "login-input"
            }
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={validatePassword}
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
            name="to_email"
          />
          <input
            type="text"
            name="confirm_code"
            style={{ display: "none" }}
            value={num}
            readOnly
          />
          <br />
          <button disabled={!formIsValid}>Next</button>
         

          <a href="/login" className="login-link">
            ALREADY HAVE AN ACCOUNT ?
          </a>
          <br />
        </form>
      </div>
    </Fragment>
  );
}
