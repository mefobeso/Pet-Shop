import React from 'react'
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Resetform() {
    return (
        <div className="login-container">
                <div className="login-background"></div>
                <form className="login">
                        <p className="login-title">RESET PASSWORD</p>
                        <br/><br/>
                        <p>Enter your email :</p>
                        <br/>
                        <input type="text" className="reset-input" />
                        <br/>   
                        <button className="btn btn-login">Next</button>
                        <br/><br/><br/><br/><br/><br/>
                        <a href="/login" className="login-link">CREATE ACCOUNT</a>
                </form>
        </div>
    )
}
