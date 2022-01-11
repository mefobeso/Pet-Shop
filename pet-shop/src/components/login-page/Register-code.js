import React, { useEffect, useState, useRef } from "react";
import "./sass/css/login.css";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import { Fragment } from "react";
import axios from "axios";
export default function RegisterCode(props) {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [localCode, setLocalCode] = useState();
  const history = useHistory();
  const codeInputRef = useRef();

  useEffect(() => {
    const confirm_code = localStorage.getItem("confirm-code");
    setLocalCode(confirm_code);
  }, []);
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
          setUser(res.data.accounts.find((p) => p.email === props.email));
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
  const navigateTo = () => history.push("/register-done");
  const okayButtonHandler = () => {
    setError(null);
  };
  const onCodeSubmit = (event) => {
    event.preventDefault();
    if (codeInputRef.current.value === localCode) {
      axios
        .put(`https://petshoptmdt.herokuapp.com/auth/${user._id}`, {
          status: "Hoạt động",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (e) {
          setError(true);
          setErrorMessage(e.message);
        });
      props.setRegistState(2);
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
          <br />
          <p>Enter code sent to your email :</p>
          <input type="text" className="login-input" ref={codeInputRef} />
          <br />
          <button>Confirm</button>

          <br />
        </form>
      </div>
      );
    </Fragment>
  );
}
