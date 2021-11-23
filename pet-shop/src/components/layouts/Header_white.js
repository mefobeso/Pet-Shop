import React, { useState, useEffect } from "react";
// Font Awesome
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Headerwhite(props) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const loginInfor = localStorage.getItem("isLoggedIn");
    if (loginInfor === "1") {
      setLogin(true);
    }
  }, []);
  console.log(props);
  return (
    <div className="white-header">
      <nav className="white-header-navbar">
        <a href="/home" className="white-header-logo">
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
            <a href="/home/category" className="">
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
            <a href="">
              Pet <FontAwesomeIcon icon="angle-down" />
            </a>
            <div className="white-header-menu">
              <div className="white-header-menu-inner-2">
                <p>Dog</p>
                <hr />
                <p style={{float:"left"}}>Husky</p>
                <p style={{float:"left"}}>Husky</p>
                <p style={{float:"left"}}>Husky</p>
              </div>
              <div className="white-header-menu-inner-2">
                <p>Cat</p>
                <hr />
                <p style={{float:"left"}}>Husky</p>
                <p style={{float:"left"}}>Husky</p>
                <p style={{float:"left"}}>Husky</p>
              </div>
            </div>
          </li>
          <li>
            <a
              href={login ? "/profile" : "/login"}
              className="white-header-login"
            >
              <FontAwesomeIcon icon="user-circle" />{" "}
              {login ? "My Account" : "Login/Register"}
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Headerwhite;
