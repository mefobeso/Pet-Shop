import React from "react";
import Footerwhite from "./Footer_white";
import Headerwhite from "./Header_white";
import "./sass/css/layout.css";

export default function Address() {
  return (
    <div>
      <Headerwhite />
      <div className="layout-container">
        <h4>Address</h4>
        <img src="https://i.ibb.co/Vw49nBg/map.png" alt="map" border="0"></img>
      </div>
      <Footerwhite />
    </div>
  );
}
