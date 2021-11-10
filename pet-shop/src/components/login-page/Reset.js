import React from 'react';
import "./sass/css/login.css";
export default function Reset() {
    return (
        <div className="login-container">
            
                <div className="login-background"></div>
                <form className="login">
                        <p className="login-title">RESET PASSWORD</p>
                        <br/><br/>
                        <p>Enter your email :</p>
                        <input type="text" className="login-input" />
                        <br/>   
                        <button>Next</button>
                        <br/><br/><br/><br/>
                        <br/>
                        <br/>
                </form>
        </div>
    )
}
