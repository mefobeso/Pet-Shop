import React from 'react'
import Footerwhite from "./Footer_white";
import Headerwhite from "./Header_white";
import "./sass/css/layout.css";

export default function Contact() {
    return (
        <div>
            <Headerwhite/>
            <div className="layout-container">
                <h4>Contact us</h4>
                <h5>Phone number: 0978699454</h5>
            </div>
            <Footerwhite/>
        </div>
    )
}
