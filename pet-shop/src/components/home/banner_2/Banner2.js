import React from "react";
import "./sass/css/banner_2.css";
import { Link } from "react-router-dom";
export default function Banner2() {
  return (
    <div className="banner2-container">
      <div className="banner2">
        <div className="hl"></div>
        <img
          src={process.env.PUBLIC_URL + `/imgs/banner-full.png`}
          alt="banner-full"
        />
        <p className="banner2-text">DOG ACCESSORIES AND CLOTHES</p>
        <div className="hl thin"></div>
        <p className="banner2-text small">MORE THAN 100 BRAND-NEW ITEMS</p>
 
          <Link className="banner2-btn" to="/home/product/page=1">{`SHOP NOW >`}</Link>
        
      </div>
    </div>
  );
}
