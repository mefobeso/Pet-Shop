import React, { useState, useEffect, useRef, Fragment } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import "./sass/css/loginadmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const history = useHistory();
  // State
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // Ref

  const okayButtonHandler = () => {
    setError(null);
  };
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
      .post("https://petshoptmdt.herokuapp.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if(response.data.userId === "61ceeba7524d7641f2801706"){
          localStorage.setItem('token', "Bearer " + response.data.accessToken)
          history.push('/admin')
          localStorage.setItem(
            "admin",
            JSON.stringify({ id: response.data.userId })
          );
          history.replace("/admin");
          setLoading(false);
        }
        else{
            alert("Only admin can access this")
            history.push('/')
        }
        //handle success
        
      })
      .catch((error) => {
        //handle error
        setError({ title: "Error", message: error.response.data.message });
      });
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
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center admin-background">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-md-8">
              <div className="card-group">
                <div className="card p-4">
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <div className="mb-3 input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon="user" />
                        </span>
                        <input
                          className="form-control"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={onUserNameChange}
                        />
                      </div>
                      <div className="mb-4 input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon="lock" />
                        </span>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={onPasswordChange}
                        />
                      </div>
                      <div>
                        <div xs={6}>
                          <button class="btn btn-primary px-4" type="submit">
                            Login
                          </button>
                        </div>
                        <div xs={6} className="text-right">
                          <button class="btn btn-link px-0" type="button">
                            Forgot password?
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="text-white bg-primary py-5 admin-side"
                  style={{ width: "44%" }}
                >
                  <div className="text-center ">
                    <div>
                      <h2>SkyePet</h2>
                      <p>Welcome to SkyePet Admin Site !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
