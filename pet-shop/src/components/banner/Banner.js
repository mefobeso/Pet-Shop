import React from 'react';
import './sass/css/banner.css';
import dataBanner from './BannerData';

export default function Banner() {
    
    return (      
        <div className="banner-container">
            {dataBanner.map((obj,index) => {
                const position= index === 0 ? "left" :(index ===1 ? "middle":"right")
                return (
                    <div className="banner" key={obj.id}>
                        <img src={process.env.PUBLIC_URL+`/imgs/banner_${index+1}.jpg`} alt="" />
                        <p className={`bt text-0 ${position}`}>{obj.title}</p>
                        <p className={`bt text-1 ${position}`}>{obj.title2}</p>
                    </div>
                )
            })}
        </div>
    )
}
