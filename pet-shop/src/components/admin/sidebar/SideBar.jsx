import React,{useState} from 'react'
import "./sidebar.css"
import {Home, TrendingUp,Timeline,PersonOutline,Category, Storefront,
    LocalOffer,EventNote} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function SideBar() {
    
    const [active, setActive] = useState(0);
    const handleActive = (index) =>{
        setActive(index);
    }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin/">
                            <li onClick={()=>handleActive(0)} className={active == 0 ? `sidebarListItem active`: "sidebarListItem"}>
                                <Home className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <li onClick={()=>handleActive(1)} className={active == 1 ? `sidebarListItem active`: "sidebarListItem"}>
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li onClick={()=>handleActive(2)} className={active == 2 ? `sidebarListItem active`: "sidebarListItem"}>
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Manager</h3>
                    <ul className="sidebarList">
                        <Link to="/admin/products">
                            <li onClick={()=>handleActive(3)} className={active == 3 ? `sidebarListItem active`: "sidebarListItem"}>
                                <Storefront className="sidebarIcon"/>
                                Products
                            </li>
                        </Link>
                        <Link to="/admin/orders">
                            <li onClick={()=>handleActive(4)} className={active == 4 ? `sidebarListItem active`: "sidebarListItem"}>
                                <EventNote className="sidebarIcon"/>
                                Orders
                            </li>
                        </Link>
                        <Link to="/admin/category">
                            <li onClick={()=>handleActive(6)} className={active == 6 ? `sidebarListItem active`: "sidebarListItem"}>
                                <LocalOffer className="sidebarIcon"/>
                                Category
                            </li>
                        </Link>
                        <Link to="/admin/users">
                            <li onClick={()=>handleActive(7)} className={active == 7 ? `sidebarListItem active`: "sidebarListItem"}>
                                <PersonOutline className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
