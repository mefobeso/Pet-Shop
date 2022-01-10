import React, { useState, useEffect, Fragment } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import ResetForm from "./Reset-form";
import ResetDone from "./Reset-done";
import ResetCode from "./Reset-code";
import ErrorModal from "../UI/ErrorModal";

import axios from "axios";
export default function Reset() {
  var num = Math.floor(Math.random() * 90000) + 10000;
  const [email, setEmail] = useState();
  const [resetState, setResetState] = useState(0);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  const navigateTo = () => history.push("/reset-code");
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const okayButtonHandler = () => {
    setError(null);
  };
  const onEmailSubmit = (event) => {
    event.preventDefault();
    if (user) {
      setResetState(1);
      localStorage.setItem("reset-code", num);
      emailjs
        .sendForm(
          "service_1eeuc2n",
          "template_nir4b5p",
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
    setError({
      title: "Email not found!",
      message: "Please check if your email address was right",
    });
  };

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://petshoptmdt.herokuapp.com/auth", {
        cancelToken: source.token,
        timeout: 10000,
      })
      .then((res) => {
        if (!unmounted) {
          // @ts-ignore
          setUser(res.data.accounts.find((p) => p.email === email));
          setLoading(false);
        }
      })
      .catch(function (e) {
        if (!unmounted) {
          setError(true);
          setErrorMessage(e.message);
          setLoading(false);
          if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
          } else {
            console.log("another error happened:" + e.message);
          }
        }
      });
    return () => {
      unmounted = true;
      source.cancel("Cancelling");
    };
  }, [email]);
  return resetState === 0 ? (
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
        <form className="login" onSubmit={onEmailSubmit}>
          <br />
          <p className="login-title">RESET PASSWORD</p>

          <p>Enter your email :</p>
          <input
            type="email"
            className="login-input"
            name="to_email"
            onChange={onEmailChange}
          />
          <br />
          <button>Next</button>
          <input
            type="text"
            name="reset_code"
            style={{ display: "none" }}
            value={num}
            readOnly
          />
          <br />
        </form>
      </div>
    </Fragment>
  ) : resetState === 1 ? (
    <ResetCode setResetState={setResetState} />
  ) : resetState === 2 ? (
    <ResetForm setResetState={setResetState} id={user._id} />
  ) : (
    <ResetDone  />
  );
}
