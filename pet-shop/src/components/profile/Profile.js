import React, { useState, useEffect } from "react";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import ProfileTab from "./ProfileTab";
import ProfileInfo from "./ProfileInfo";
import ProfileBody from "./ProfileBody";
import "./sass/css/profile.css";
import "../FontAwesome";
import FadeLoader from "react-spinners/FadeLoader";

import axios from "axios";
export default function Profile() {
  let timeout = 10000;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState();
  const [order, setOrder] = useState();
  const id = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get(`https://petshoptmdt.herokuapp.com/auth/${id.id}`, {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((res) => {
        if (!unmounted) {
          setData(res.data);
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
  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get(`http://localhost:5000/auth/${id.id}`, {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((res) => {
        if (!unmounted) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!unmounted) {
        }
        setError(true);
        setErrorMessage(e.message);
        setLoading(false);
        if (axios.isCancel(e)) {
          console.log(`request cancelled:${e.message}`);
        } else {
          console.log("another error happened:" + e.message);
        }
      });
    return () => {
      unmounted = true;
      source.cancel("Cancelling");
    };
  }, [timeout]);
  const [tab, setTab] = useState(0);
  const tabChange = (tab) => {
    setTab(tab);
  };
  const bgDisplay = Array.from({ length: 3 }).map((item, index) => {
    const profilebg =
      tab === 0
        ? "https://i.ibb.co/jWRP1PC/profile-bg.png"
        : "https://i.ibb.co/FsTFVSw/profile-bg2.png";

    return (
      <img className="profile-bg" src={profilebg} key={index} alt={index}></img>
    );
  });

  return loading ? (
    <div className="loader">
      <FadeLoader size={30} color={"#123abc"} loading={loading} />
    </div>
  ) : (
    <div>
      <Headerwhite />
      {bgDisplay}
      <div className="profile-container">
        <div className="profile">
          <ProfileInfo dataInfo={data} />
          <div className="profile-content">
            <ProfileTab tab={tab} tabHandler={tabChange} />
            <ProfileBody tab={tab} dataInfo={data} dataOrder={data} />
          </div>
        </div>
      </div>
      <Footerwhite />
    </div>
  );
}
