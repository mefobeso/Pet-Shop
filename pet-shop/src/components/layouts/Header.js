import React from 'react';
// Font Awesome
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Header(){
    return(
        <div className="head-container">
            <div className="header">
                <nav className="header-navbar">
                <a href="/" className="header-logo">
                      <img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo"></img>
                </a>
                <ul>
                    <li>Home</li>
                    <li>Item <FontAwesomeIcon icon="angle-down"/>
                        <div className="header-menu">
                            <div className="header-menu-inner">
                                <p>Dresses</p>
                                <p>Outdoor</p>
                                <p>Indoor</p>
                                <p>Sport</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Food</p>
                                <p>Royal</p>
                                <p>Hill's</p>
                                <p>Purina</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Accessories</p>
                                <p>Groom</p>
                                <p>Nail Cutter</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Colar Belt</p>
                                <p>Leather</p>
                                <p>Fabrics</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Leashes</p>
                                <p>Chain</p>
                                <p>Rubber</p>
                                <p>Leather</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Bowl</p>
                                <p>Steel</p>
                                <p>Plastic</p>
                            </div>
                        </div>                 
                    </li>
                    <li>Pet <FontAwesomeIcon icon="angle-down"/>
                    <div className="header-menu">
                            <div className="header-menu-inner">
                                <p>Dresses</p>
                                <p>Outdoor</p>
                                <p>Indoor</p>
                                <p>Sport</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Food</p>
                                <p>Royal</p>
                                <p>Hill's</p>
                                <p>Purina</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Accessories</p>
                                <p>Groom</p>
                                <p>Nail Cutter</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Colar Belt</p>
                                <p>Leather</p>
                                <p>Fabrics</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Leashes</p>
                                <p>Chain</p>
                                <p>Rubber</p>
                                <p>Leather</p>
                            </div>
                            <div className="header-menu-inner">
                                <p>Bowl</p>
                                <p>Steel</p>
                                <p>Plastic</p>
                            </div>
                        </div>          
                    </li>
                    <li><FontAwesomeIcon icon="user-circle"/> My Account</li>
                    <li><FontAwesomeIcon icon="shopping-cart"/></li>
                </ul>
                </nav>
                
            </div>
            

        </div>
    )
};
export default Header;