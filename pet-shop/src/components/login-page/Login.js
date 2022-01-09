import React, { useRef, useState, useEffect } from "react";
import "./sass/css/login.css";
import { Redirect, useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
// Facebook and Google Login
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Fragment } from "react/cjs/react.development";

export default function Login(props) {
  // Variable
  const clientId =
    "881544965186-ps5l0kdtqg35ifsbhm8gii58pbr8mlbn.apps.googleusercontent.com";
  const appId = "1821016354755986";

  const history = useHistory();
  const navigateTo = () => history.goBack();
  const navigateHome = () => {
    history.push("/home");
  };

  // State
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // Ref
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (event) => {
    setLoading(true);
    // let unmounted = false;
    // const source = axios.Cancel.source();
    event.preventDefault();
    await axios
      .post(
        "https://petshoptmdt.herokuapp.com/auth/login",
        {
          username: username,
          password: password,
        }
      )
      .then((response) => {
        //handle success
        console.log(response.data);
        localStorage.setItem(
          "user",
          JSON.stringify({ id: response.data.userId })
        );
        history.replace("/home");

        setLoading(false);
      })
      .catch((error) => {
        //handle error
        setError({ title: "Error", message: error.response.data.message });
      });
  };

  // Facebook and Google Login
  const onSuccessGG = (res) => {
    console.log("Login success", res);
    navigateHome();
    props.onGGLogin();
  };
  const onFailGG = (res) => {
    console.log("Login fail", res);
  };
  const responseFacebook = (res) => {
    console.log("Login success", res);
    navigateHome();
    props.onGGLogin();
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
              className={"login-input"}
              placeholder="Username"
              value={username}
              onChange={onUserNameChange}
              // ref={usernameInputRef}
            />
            <br />
            <input
              type="password"
              className={"login-input"}
              placeholder=" Password"
              value={password}
              onChange={onPasswordChange}
              // ref={passwordInputRef}
            />
            <br />
            <button type="submit">Log in</button>
            <p>______________________________</p>
            <FacebookLogin
              appId={appId}
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="button"
              textButton="Facebook"
            />

            <br />
            <GoogleLogin
              className="gg"
              onClick={navigateTo}
              clientId={clientId}
              buttonText="Google"
              onSuccess={onSuccessGG}
              onFailure={onFailGG}
              cookiePolicy={"single_host_origin"}
            />
            <p>______________________________</p>
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
    </Fragment>
  );
}
