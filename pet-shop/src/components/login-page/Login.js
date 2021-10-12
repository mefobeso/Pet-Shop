import React from 'react';
import Headerwhite from '../layouts/Header_white';
import Footerwhite from '../layouts/Footer_white';
import Loginform from './Loginform';

import "./sass/css/login.css";
export default function Login() {
    return (
        <div>
            <Headerwhite/>
            <Loginform/>
            <Footerwhite/>
        </div>
    )
}
