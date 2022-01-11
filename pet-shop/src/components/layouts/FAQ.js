import React from "react";
import Footerwhite from "./Footer_white";
import Headerwhite from "./Header_white";
import "./sass/css/layout.css";

export default function FAQ() {
  return (
    <div>
      <Headerwhite />
      <div className="layout-container">
        <h4>FAQ</h4>
        <p>Do you sell pets?</p>
        <p>Yes, we do</p>
      </div>
      <Footerwhite />
    </div>
  );
}
