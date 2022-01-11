import React from "react";
import Footerwhite from "./Footer_white";
import Headerwhite from "./Header_white";
import "./sass/css/layout.css";
export default function About() {
  return (
    <div>
      <Headerwhite />
      <div className="layout-container">
        <h4>About Us</h4>
        <p>Skyepet founded at 14/12/2021, we sell pet and others stuffs.</p>
      </div>
      <Footerwhite />
    </div>
  );
}
