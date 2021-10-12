import React from 'react';
//Font Awesome
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Footer(){
    return(
        <div className="background background-footer">
            <div className="footer container">
                <ul className="footer-items">
                    <li><a className="footer-items-link" href="/">About us</a></li>
                    <li><a className="footer-items-link" href="/"><FontAwesomeIcon icon="phone"/> 0978699454</a></li>
                    <li><a className="footer-items-link" href="/"><FontAwesomeIcon icon="home"/> 103 Vu Tung St</a></li>
                </ul>
                <a href="/" className="footer-items-faq">FAQ</a>
            </div>
        </div>
    )
};
export default Footer;