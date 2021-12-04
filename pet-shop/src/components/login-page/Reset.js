import React from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
export default function Reset() {
  var num = Math.floor(Math.random() * 90000) + 10000;
  const history = useHistory();
  const navigateTo = () => history.push("/reset-code");
  const onEmailSubmit = (event) => {
    event.preventDefault();
    navigateTo();
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
  };
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login" onSubmit={onEmailSubmit}>
        <br />
        <p className="login-title">RESET PASSWORD</p>

        <p>Enter your email :</p>
        <input type="email" className="login-input" name="to_email" />
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
  );
}
