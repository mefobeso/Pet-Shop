import React, { useRef, useState, useEffect, useReducer } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import emailjs from "emailjs-com";
import axios from "axios";
// css
import "./sass/css/login.css";

export default function Register() {
  // Function
  // useHistory
  const history = useHistory();
  const navigateTo = () => history.push("./register-code");
  var num = Math.floor(Math.random() * 90000) + 10000;
  // State

  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Submit
  const submitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("https://petshoptmdt.herokuapp.com/auth/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        //handle success
        console.log(response.data);
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
        history.replace("/register-code");
      })
      .catch((error) => {
        //handle error
        setError({ title: "Error", message: error.response.data.message });
      });
    localStorage.setItem("confirm-code", num);
  };

  // Validation

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
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
        <form className="login" onSubmit={submitHandler}>
          <p className="login-title">REGISTER</p>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            onChange={usernameChangeHandler}
            name="to_name"
          />
          <br />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
          <br />
          <input
            type="password"
            className="login-input confirmpassword"
            placeholder="Confirm Password"
            onChange={confirmPasswordChangeHandler}
          />
          <br />
          <input
            type="email"
            className="login-input confirmpassword"
            placeholder="Email"
            name="to_email"
            onChange={emailChangeHandler}
          />
          <br />
          <input
            type="text"
            className="login-input confirmpassword"
            placeholder="Phone"
            name="to_phone"
            onChange={phoneChangeHandler}
          />
          <input
            type="text"
            name="confirm_code"
            style={{ display: "none" }}
            value={num}
            readOnly
          />
          <br />
          <button>Next</button>
          <br />

          <a href="/login" className="login-link">
            ALREADY HAVE AN ACCOUNT ?
          </a>
          <br />
        </form>
      </div>
    </Fragment>
  );
}
