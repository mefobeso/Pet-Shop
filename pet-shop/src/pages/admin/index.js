import React from 'react'
import "./admin.css"
import Topbar from '../../components/admin/topbar/TopBar.jsx'
import Sidebar from '../../components/admin/sidebar/SideBar.jsx'
import Home from "./Home.jsx"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UserList from './userlist/UserList'
import User from './user/User'
import NewUser from './newuser/NewUser'
import ProductsList from './products/ProductsList'
import ProductDetail from './productdetail/ProductDetail'
import NewProduct from './newproduct/NewProduct'
import BrandCate from './brandcate/BrandCate'
import Orders from './orders/Orders'
import OrderDetail from './orderDetail/OrderDetail'

export default function index() {
    return (
        <div>
            <Topbar/>
            <div className="AdminContainer">
            <Sidebar/>
            <div className="others">
                <Switch>
                    <Route exact
                    path={process.env.PUBLIC_URL + "/admin"}
                    component={Home}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/users"}
                        component={UserList}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/users/:id" }
                        component={User}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/newuser" }
                        component={NewUser}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/products" }
                        component={ProductsList}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/products/:id" }
                        component={ProductDetail}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/newproduct" }
                        component={NewProduct}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/brandcate" }
                        component={BrandCate}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/orders" }
                        component={Orders}
                    />
                    <Route exact
                        path={process.env.PUBLIC_URL + "/admin/orders/:id" }
                        component={OrderDetail}
                    />
                </Switch>
            </div>
            </div>
        </div>
    )
}
