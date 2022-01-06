import React, { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
// Font Awesome
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react/cjs/react.development";

function Headerwhite(props) {
  const [login, setLogin] = useState(false);
  const [searching, setSearching] = useState(false);

  const history = useHistory();
  const navigateTo = (search) => {
    history.push(`/home/search/keyword=${search}`);
  };
  const navigateHome = () => {
    history.push("/home");
  };
  // Ref
  const searchInputRef = useRef();
  // useEffect

  useEffect(() => {
    const loginInfor = localStorage.getItem("isLoggedIn");
    if (loginInfor === "1") {
      setLogin(true);
    }
  }, []);

  const searchHandler = () => {
    setSearching(!searching);
  };
  const onSearching = () => {
    setSearching(!searching);
    navigateTo(searchInputRef.current.value);
  };
  const logOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setLogin(false);
    navigateHome();
  };
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
              Product <FontAwesomeIcon icon="angle-down" />
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
            </div>
          </li>
          <li>
    
            <div className="white-header-menu">
              <div className="white-header-menu-inner-2">
                <p>Dog</p>
                <hr />
                <p style={{ float: "left" }}>Husky</p>
                <p style={{ float: "left" }}>Alaska</p>
                <p style={{ float: "left" }}>Retriver</p>
              </div>
              <div className="white-header-menu-inner-2">
                <p>Cat</p>
                <hr />
                <p style={{ float: "left" }}>Brishtish</p>
                <p style={{ float: "left" }}>Sphynx</p>
                <p style={{ float: "left" }}>Husky</p>
              </div>
            </div>
          </li>
          <li>
            <a href="/news/page=1">
              News
            </a>
          </li>
          <li>
            {!searching && (
              <FontAwesomeIcon icon="search" onClick={searchHandler} />
            )}
            {searching && (
              <form onSubmit={onSearching}>
                <input
                  type="text"
                  placeholder="Search"
                  ref={searchInputRef}
                  className="white-header-search"
                />
                <FontAwesomeIcon icon="search" onClick={searchHandler} />
              </form>
            )}
          </li>
          <li className="loggedin">
            {login && (
              <>
                <a href={"/profile"} className="white-header-login ">
                  <FontAwesomeIcon icon="user-circle" /> {"My Account"}
                </a>
                <div className="white-header-logout" onClick={logOutHandler}>
                  <FontAwesomeIcon icon="sign-out-alt" />
                  {" log out"}
                </div>
              </>
            )}
            {!login && (
              <a href="/login" className="white-header-login">
                <FontAwesomeIcon icon="user-circle" /> Login/Register
              </a>
            )}
          </li>
          <li>
            <a href="/home/favorite">
              <FontAwesomeIcon icon="heart" style={{ marginRight: "10px" }} />
            </a>
            <a href="/home/cart">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Headerwhite;
