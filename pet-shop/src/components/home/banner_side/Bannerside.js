import React from 'react';
import './sass/css/bannerside.css';
export default function Bannerside() {
    return (
        <div className="bannerside-container">
                {Array.from({length:2}).map((item,index)=>(
                    <div className={`${index===0?"bannerside-left":"bannerside-right"}`}>
                        <img src={process.env.PUBLIC_URL+`/imgs/banner-side-${index}.png`} alt="bannerside" />
                        <div className="bannerside-texts">
                            <p className="bannerside-texts-0">{`${index===0?"DOG ACCESSORIES":"DOG CLOTHES"}`}</p>
                            <p className="bannerside-texts-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,”</p>
                            <p className="bannerside-btn">{`SHOP NOW >`}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}
