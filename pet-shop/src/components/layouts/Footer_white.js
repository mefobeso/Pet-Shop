import React from 'react';
//Font Awesome
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Footerwhite(){
    return(
            <div className="white-footer container">
                <ul className="white-footer-items">
                    <li><a className="white-footer-items-link" href="/">About us</a></li>
                    <li><a className="white-footer-items-link" href="/"><FontAwesomeIcon icon="phone"/> 0978699454</a></li>
                    <li><a className="white-footer-items-link" href="/"><FontAwesomeIcon icon="home"/> 103 Vu Tung St</a></li>
                </ul>
                    <a href="/" className="white-footer-items-faq">FAQ</a>
                
            </div>
        // <div className="background white-background-footer">
        // </div>
    )
};
export default Footerwhite;