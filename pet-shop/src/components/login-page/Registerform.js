import React from 'react'
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Registerform() {
    return (
        <div className="login-container">
                <div className="login-background"></div>
                <form className="login">
                        <p className="login-title">REGISTER</p>
                        <br/><br/>
                        <input type="text" className="login-input username" placeholder="&#xF007;   Username"/>
                        <br/>
                        <input type="text" className="login-input password" placeholder="&#xf023;   Password"/>
                        <br/>
                        <input type="text" className="login-input confirmpassword" placeholder="&#xf023;   Confirm Password"/>
                        <br/>
                        <input type="text" className="login-input confirmpassword" placeholder="&#xf0e0;  Email"/>
                        <br/><br/>
                        <button className="btn btn-login">Next</button>
                        <br/><br/>
                        <a href="/forgot-password" className="login-link">CAN'T SIGN IN ?</a>
                        <a href="/login" className="login-link">ALREADY HAVE AN ACCOUNT ?</a>
                </form>
        </div>
    )
}
