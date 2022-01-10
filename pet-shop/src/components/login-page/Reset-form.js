import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./sass/css/login.css";
import { useHistory, useParams } from "react-router-dom";
import { Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
export default function ResetForm(props) {
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState();
  const onResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInputRef.current.value.trim().length < 6) {
      setError({
        title: "Invalid password !",
        message: "Please enter password longer than 6 characters !",
      });
      return;
    }
    if (
      passwordInputRef.current.value === confirmPasswordInputRef.current.value
    ) {
      axios.put(`https://petshoptmdt.herokuapp.com/auth/${props.id}`, {
        password: passwordInputRef.current.value,
      });
      props.setResetState(3);
    } else {
      setError({
        title: "Wrong confirm password !",
        message: "Your confirm password not matching !",
      });
    }
  };
  const okayButtonHandler = () => {
    setError(null);
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
        <form className="login" onSubmit={onResetPasswordSubmit}>
          <br />
          <p className="login-title">RESET PASSWORD</p>
          <br />
          <input
            type="password"
            className="login-input password"
            placeholder="Password"
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
          <br />
          <button>Next</button>
          <br />
          <br />
        </form>
      </div>
    </Fragment>
  );
}
