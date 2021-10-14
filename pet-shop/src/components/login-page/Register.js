import React from 'react';
import Headerwhite from '../layouts/Header_white';
import Footerwhite from '../layouts/Footer_white';
import Registerform from './Registerform';

import "./sass/css/login.css";
export default function Register() {
    return (
        <div>
            <Headerwhite/>
            <Registerform/>
            <Footerwhite/>
        </div>
    )
}
