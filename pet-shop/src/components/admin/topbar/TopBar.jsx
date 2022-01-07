import React from 'react'
import {NotificationsNone, Language, AccountCircle} from '@material-ui/icons';
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="adminlogo" src="/assets/img/logo/logo.png" alt="" />
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <AccountCircle/>              
                    </div>
                    <span>Xin chào</span>
                </div>
            </div>
        </div>
    )
}
