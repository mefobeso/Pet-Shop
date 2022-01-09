import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ErrorModal from "../UI/ErrorModal";
import "./sass/css/loginadmin.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { Fragment } from "react/cjs/react.development";
export default function Login() {
  const history = useHistory();
  // State
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // Ref
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");
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
        //handle success
        console.log(response.data);
        localStorage.setItem(
          "admin",
          JSON.stringify({ id: response.data.userId })
        );
        history.replace("/admin");
        setLoading(false);
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
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={submitHandler}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={onUserNameChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={onPasswordChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5 admin-side"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center ">
                    <div>
                      <h2>SkyePet</h2>
                      <p>Welcome to SkyePet Admin Site !</p>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </Fragment>
  );
}
