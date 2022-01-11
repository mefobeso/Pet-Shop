import React, { useRef, useState, useEffect, Fragment } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
// Facebook and Google Login
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
export default function Login(props) {
  const clientId =
    "881544965186-ps5l0kdtqg35ifsbhm8gii58pbr8mlbn.apps.googleusercontent.com";
  const appId = "1821016354755986";
  // Variable
  const history = useHistory();
  const navigateTo = () => history.goBack();
  const navigateHome = () => {
    history.push("/home");
  };
  let timeout = 10000;

  // State
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('tokenUser')){
        history.replace('/home')
    }
})
  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get(`https://petshoptmdt.herokuapp.com/auth`, {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((res) => {
        if (!unmounted) {
          setData(res.data.accounts);
          setLoading(false);
        }
      })
      .catch((e) => {
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
  }, [timeout]);
  //Google
  const onSuccessGG = async (res) => {
    console.log("Login success", res);
    const existed = data.find((p) => p.email === res.profileObj.email);
    if (existed) {
      await axios
        .post("https://petshoptmdt.herokuapp.com/auth/login", {
          username: res.profileObj.googleId,
          password: "google",
        })
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
    }
    if (!existed) {
      await axios
        .post("https://petshoptmdt.herokuapp.com/auth/register", {
          username: res.profileObj.googleId,
          name: res.profileObj.name,
          password: "google",
          email: res.profileObj.email,
          phone: 0,
          status: "Hoạt động",
          address: "none",
        })
        .then((response) => {
          //handle success
          console.log(response.data);
        })
        .catch((error) => {
          //handle error
          setError({ title: "Error", message: error.response.data.message });
        });
    }
  };
  const onFailGG = (res) => {
    console.log("Login fail", res);
  };
  const responseFacebook = (res) => {
    console.log("Login success", res);
    navigateHome();
  };

  //
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post("https://petshoptmdt.herokuapp.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        //handle success
        console.log(response.data);
        localStorage.setItem('tokenUser', "Bearer " + response.data.accessToken);
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
            />
            <br />
            <button type="submit">Log in</button>
            <p>______________________________</p>

            <GoogleLogin
              className="gg"
              onClick={navigateTo}
              clientId={clientId}
              buttonText="Google"
              onSuccess={onSuccessGG}
              onFailure={onFailGG}
              cookiePolicy={"single_host_origin"}
            />
            <br />
            <FacebookLogin
              appId={appId}
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="button"
              textButton="Facebook"
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
