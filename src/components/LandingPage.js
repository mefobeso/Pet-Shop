import React from "react";
// components
function LandingPage() {
  return (
    <div className="landing-bg">
      {/* <Header /> */}
      <div className="landing">
        <span className="landing-slogan">Best things for your boss</span>
        <span> </span>
        <span></span>
        <a href="/home" className="landing-btn">
          Let's explore !{""}
        </a>
        <span></span>
        <span className="landing-slogan3">
          Product from over 50 brands all over the world
        </span>
        <div className="landing-slogan2">
          <img
            src={process.env.PUBLIC_URL + "/slogan.jpg"}
            alt="slogan"
            className="landing-slogan2-img"
          ></img>
          <span className="landing-slogan2-text">
            "One of the best pet shop in the world"
          </span>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default LandingPage;
