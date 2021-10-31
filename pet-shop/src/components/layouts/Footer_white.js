import React from "react";
//Font Awesome
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footerwhite() {
  return (
    <div className="white-footer">
      <a className="white-footer-link" href="/">
        About us
      </a>
      <a className="white-footer-link" href="/">
        <FontAwesomeIcon icon="phone" /> 0978699454
      </a>
      <a className="white-footer-link" href="/">
        <FontAwesomeIcon icon="home" /> 103 Vu Tung St
      </a>
      <a href="/" className="white-footer-link">
        FAQ
      </a>
    </div>
    // <div className="background white-background-footer">
    // </div>
  );
}
export default Footerwhite;
