import React from 'react'
import {NotificationsNone, Language, AccountCircle} from '@material-ui/icons';
import {useHistory} from 'react-router-dom'
import "./topbar.css"

export default function TopBar() {
    const history = useHistory()
    const useridAdmin = localStorage.getItem('admin')
    const LogoutAdmin = ()=>{
        localStorage.removeItem('admin')
        localStorage.removeItem('token')
        history.push('/adminLogin')
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="adminlogo" src={process.env.PUBLIC_URL + "/logo-white.png"} alt="" />
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
                    <span onClick={()=>LogoutAdmin()} className="buttonLogin">{useridAdmin ? "Đăng xuất": "Xin chào"}</span>
                </div>
            </div>
        </div>
    )
}
