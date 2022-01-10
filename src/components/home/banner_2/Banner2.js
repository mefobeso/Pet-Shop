import React from 'react';
import './sass/css/banner_2.css';

export default function Banner2() {
    return (
        <div className="banner2-container">
            <div className="banner2">
                <div className="hl"></div>
                <img src={process.env.PUBLIC_URL +`/imgs/banner-full.png`} alt="banner-full" />
                <p className="banner2-text">DOG ACCESSORIES AND CLOTHES</p>
                <div className="hl thin"></div>
                <p className="banner2-text small">MORE THAN 100 BRAND-NEW ITEMS</p>
                <div className="banner2-btn">
                    <p className="btn">{`SHOP NOW >`}</p>  
                </div>
            </div>
        </div>
    )
}
