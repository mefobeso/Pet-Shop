import React from 'react';
// components
import Headerwhite from './layouts/Header_white';
import Slider from './slider/slider';
import Banner from './banner/Banner';
import Catalog from './catalog/Catalog';
import Footerwhite from './layouts/Footer_white';
import Banner2 from './banner_2/Banner2';
import Bannerside from './banner_side/Bannerside';
import Policies from './policies/Policies';
// FontAwesome

function HomePage(){
    return(
        <div>
            <Headerwhite/>    
            <Slider/>    
            <Banner/> 
            <Catalog/> 
            <Banner2/>
            <Bannerside/> 
            <Policies/> 
            <Footerwhite/>
        </div>
    )
};
export default HomePage;
