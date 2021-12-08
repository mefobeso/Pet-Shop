import React, { useState } from "react";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import ProfileTab from "./ProfileTab";
import ProfileInfo from "./ProfileInfo";
import ProfileBody from "./ProfileBody";
import "./sass/css/profile.css";
import "../FontAwesome";
import { dataInfo, dataOrder } from "./ProfileData";

export default function Profile() {
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

  return (
    <div>
      <Headerwhite />
      {bgDisplay}
      <div className="profile-container">
        <div className="profile">
          <ProfileInfo />
          <div className="profile-content">
            <ProfileTab tab={tab} tabHandler={tabChange} />
            <ProfileBody tab={tab} dataInfo={dataInfo} dataOrder={dataOrder} />
          </div>
        </div>
      </div>
      <Footerwhite />
    </div>
  );
}
