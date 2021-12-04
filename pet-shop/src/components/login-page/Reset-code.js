import React, { useState, useEffect, useRef } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
export default function ResetCode() {
  const [error, setError] = useState();
  const [localCode, setLocalCode] = useState();
  const history = useHistory();
  const codeInputRef = useRef();
  const navigateTo = () => history.push("/reset-form");
  const onResetCodeSubmit = (event) => {
    event.preventDefault();
    if (codeInputRef.current.value === localCode) {
      navigateTo();
      localStorage.removeItem("reset-code");
    } else {
      setError({
        title: "Wrong confirm code !",
        message: "Please try enter another code !",
      });
    }
  };
  const okayButtonHandler = () => {
    setError(null);
  };
  useEffect(() => {
    const confirm_code = localStorage.getItem("reset-code");
    setLocalCode(confirm_code);
  }, []);
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
        <form className="login" onSubmit={onResetCodeSubmit}>
          <br />
          <p className="login-title">RESET PASSWORD</p>
          <p>Enter code sent to your email :</p>
          <input type="text" className="login-input" ref={codeInputRef} />
          <br />
          <button>Confirm</button>
          <br />
        </form>
      </div>
    </Fragment>
  );
}
