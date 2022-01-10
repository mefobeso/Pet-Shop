import React from 'react';
import './sass/css/policies.css';
import '../../FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Policies() {
    return (
        <div className="policies-container">
            {Array.from({length:3}).map((item,index)=>{
                const itemOrder = index===0?"policies-items left":(index===1?"policies-items middle":"policies-items right")
                const iconOrder = index===0?"truck":(index===1?"phone":"globe")
                const title = index===0?"FAST DELIVERY":(index===1?"CUSTOMER SERVICE":"EASY ONLINE")
                return (           
                    <div className={`${itemOrder}`}>
                            <FontAwesomeIcon icon={`${iconOrder}`} className="policies-icon"/>
                            <p>{`${title}`}</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,”</p>
                    </div>
                )
                }
            )}
        </div>
    )
}
