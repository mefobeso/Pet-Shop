import React, { useState } from "react";
// Font Awesome
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Headerwhite() {
  const [login, setLogin] = useState("logged-out");
  return (
    <div className="white-header">
      <nav className="white-header-navbar">
        <a href="/" className="white-header-logo">
          <img
            src={process.env.PUBLIC_URL + "/logo-white.png"}
            alt="logo"
          ></img>
        </a>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/product" className="">
              Item <FontAwesomeIcon icon="angle-down" />
            </a>
            <div className="white-header-menu">
              <div className="white-header-menu-inner">
                <p>Dresses</p>
                <p>Outdoor</p>
                <p>Indoor</p>
                <p>Sport</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Food</p>
                <p>Royal</p>
                <p>Hill's</p>
                <p>Purina</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Accessories</p>
                <p>Groom</p>
                <p>Nail Cutter</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Colar Belt</p>
                <p>Leather</p>
                <p>Fabrics</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Leashes</p>
                <p>Chain</p>
                <p>Rubber</p>
                <p>Leather</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Bowl</p>
                <p>Steel</p>
                <p>Plastic</p>
              </div>
            </div>
          </li>
          <li>
            Pet <FontAwesomeIcon icon="angle-down" />
            <div className="white-header-menu">
              <div className="white-header-menu-inner">
                <p>Dresses</p>
                <p>Outdoor</p>
                <p>Indoor</p>
                <p>Sport</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Food</p>
                <p>Royal</p>
                <p>Hill's</p>
                <p>Purina</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Accessories</p>
                <p>Groom</p>
                <p>Nail Cutter</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Colar Belt</p>
                <p>Leather</p>
                <p>Fabrics</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Leashes</p>
                <p>Chain</p>
                <p>Rubber</p>
                <p>Leather</p>
              </div>
              <div className="white-header-menu-inner">
                <p>Bowl</p>
                <p>Steel</p>
                <p>Plastic</p>
              </div>
            </div>
          </li>
          <li>
            <a
              href={login === "logged-in" ? "/profile" : "/login"}
              className="white-header-login"
            >
              <FontAwesomeIcon icon="user-circle" />{" "}
              {login === "logged-in" ? "My Account" : "Login/Register"}
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon="shopping-cart" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Headerwhite;
