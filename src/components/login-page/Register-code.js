import React, { useEffect, useState, useRef } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import { Fragment } from "react";
export default function RegisterCode() {
  const [error, setError] = useState();
  const [localCode, setLocalCode] = useState();
  const history = useHistory();
  const codeInputRef = useRef();

  useEffect(() => {
    const confirm_code = localStorage.getItem("confirm-code");
    setLocalCode(confirm_code);
  }, []);
  const navigateTo = () => history.push("/register-done");
  const okayButtonHandler = () => {
    setError(null);
  };
  const onCodeSubmit = (event) => {
    event.preventDefault();
    if (codeInputRef.current.value === localCode) {
      navigateTo();
      localStorage.removeItem("confirm-code");
    } else {
      setError({
        title: "Wrong confirm code !",
        message: "Please try enter another code !",
      });
    }
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
        <form className="login" onSubmit={onCodeSubmit}>
          <p>Enter code sent to your email :</p>
          <input type="text" className="login-input" ref={codeInputRef} />
          <br />
          <button>Confirm</button>

          <br />
          <br />
        </form>
      </div>
      );
    </Fragment>
  );
}
