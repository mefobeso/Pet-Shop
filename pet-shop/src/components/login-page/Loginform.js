import React from 'react'
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Loginform() {

    return (
        <div className="login-container">
                <div className="login-background"></div>
                <form className="login">
                        <h2>LOGIN</h2>
                        <br/><br/>
                        <input type="text" className="login-input username" placeholder="&#xF007;   Username"/>
                        <br/>
                        <input type="text" className="login-input password" placeholder="&#xf023;   Password"/>
                        <br/><br/>
                        <button className="btn btn-login">LOGIN</button>
                        <br/><br/><br/><br/>
                        <a href="#">CAN'T SIGN IN</a>
                        <a href="#">CREATE ACCOUNT</a>
                </form>
        </div>
    )
}
