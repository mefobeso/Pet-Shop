import React from "react";
//Font Awesome
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <a className="footer-link" href="/">
          About us
        </a>
        <a className="footer-link" href="/">
          <FontAwesomeIcon icon="phone" /> 0978699454
        </a>
        <a className="footer-link" href="/">
          <FontAwesomeIcon icon="home" /> 103 Vu Tung St
        </a>
        <a href="/" className="footer-link">
          FAQ
        </a>
      </div>
    </div>
  );
}
export default Footer;
