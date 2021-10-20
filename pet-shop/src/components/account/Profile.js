import React,{useState} from 'react';
import Headerwhite from '../layouts/Header_white';
import Footerwhite from '../layouts/Footer_white';
import "./sass/css/profile.css";
import '../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default function Profile() {
    const [tab, setTab] = useState(1)
    const tabChange = tab =>{
        setTab(tab)
    }
    return (
        <div>
            <Headerwhite/>
            {Array.from({length:3}).map((item,index)=>{
                const profilebg = tab===1?"https://i.ibb.co/jWRP1PC/profile-bg.png":(tab===2?"https://i.ibb.co/FsTFVSw/profile-bg2.png":"https://i.ibb.co/1vLFbLr/profile-bg3.png");
                return(
                    <img className="profile-bg" src={profilebg}>
                    </img>
                )
            })}
            <div className="profile-container">
                <div className="profile">
                    <div className="profile-info">
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80" alt="profile-avatar" border="0" className="profile-info-ava profile-info-items"/>
                        <p className="profile-info-text profile-info-name">Nguyen Thanh An</p>
                        <p className="profile-info-text">Your pet: <FontAwesomeIcon icon="dog" className="profile-info-dog"/>: 1 <FontAwesomeIcon icon="cat" className="profile-info-cat"/>: 1</p>
                        <p className="profile-info-text">Total spent: <FontAwesomeIcon icon="dollar-sign" className="profile-info-dollar"/> 3000</p>
                    </div>
                    <div className="profile-content">
                        <div className="profile-content-tabs">
                        {Array.from({length:3}).map((item,index)=>{
                            const tabOrder = index ===0? "  Profile":(index===1?"  History":"  Order")
                            const iconOrder = index ===0? <FontAwesomeIcon icon="id-card"/>:(index===1?<FontAwesomeIcon icon="history"/>:<FontAwesomeIcon icon="gifts"/>)
                                return(
                                    <div 
                                    onClick={ () => tabChange(index+1)}
                                    className={tab===index +1 ?"profile-content-tabs-item active":"profile-content-tabs-item"}>
                                       
                                        <p>
                                            {iconOrder}
                                            {tabOrder}
                                        </p>
                                        
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <Footerwhite/>
        </div>
    )
}
