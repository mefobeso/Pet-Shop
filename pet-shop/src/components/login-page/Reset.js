import React from 'react';
import Headerwhite from '../layouts/Header_white';
import Footerwhite from '../layouts/Footer_white';
import Resetform from './Resetform';

import "./sass/css/login.css";
export default function Reset() {
    return (
        <div>
            <Headerwhite/>
            <Resetform/>
            <Footerwhite/>
        </div>
    )
}
