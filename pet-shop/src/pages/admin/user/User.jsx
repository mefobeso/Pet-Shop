import React,{ useEffect,useState } from 'react'
import './user.css'
import { Link, useParams } from 'react-router-dom'
import {ShoppingCart,AccountCircle,PermIdentity,AttachMoney,Cake,PhoneAndroid,LocationOn, EmailOutlined} from '@material-ui/icons'
import axios from 'axios'
export default function User() {
    const {id} = useParams()
    const [user,setUser]= useState({});
    const [newName,setNewName]= useState();
    const [newAge,setNewAge]= useState();
    const [newPhone,setNewPhone]= useState();
    const [newEmail,setNewEmail]= useState();
    const [newAddress,setNewAddress]= useState();
    const [order,setOrder]= useState([]);
    const [orderUser,setOrderUser]= useState([]);

    const UpdateUser = async () =>{
       await axios.put(`https://petshoptmdt.herokuapp.com/auth/${id}`,{
        name:newName,

        phone:newPhone,
        email:newEmail,
        address:newAddress
       })
       .then(res=>alert(res.data.message))
       await axios.get(`https://petshoptmdt.herokuapp.com/auth/${id}`)
       .then(res=>{
           setUser(res.data.account)
       })
    }   
    const getOrderUser = (id) =>{
             
        return order.filter(item => item.user_id === id && item.status === "Confirmed")      
    } 
    const getUser = () =>{
        return axios.get(`https://petshoptmdt.herokuapp.com/auth/${id}`)   
      }
    const getOrders = () =>{
        return axios.get("https://petshoptmdt.herokuapp.com/bill")   
      }
    useEffect( ()=>{
        axios.all([getUser(),getOrders()])
        .then(res=>{
            setUser(res[0].data.account)
            setOrder(res[1].data.bills)
        })
        .catch(err=>console.log(err))

    },[])
    return (
        <div className="userDetail">
            <div className="userTitleContainer">
                <h1 className="userTitle">Details User</h1>
                <Link to="/admin/newuser/">
                <button className="userAddButton">Create New User</button>
                </Link>
            </div>
            <div className="userContaier">
                <div className="userShow">
                    <div className="userShowTop">
                        <AccountCircle className="userShowIconTitle"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.name}</span>
                            <span className="userShowAge">{user.username}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfor">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInforTitle">{user.phone}</span>
                        </div>
                        <div className="userShowInfor">
                            <EmailOutlined className="userShowIcon"/>
                            <span className="userShowInforTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfor">
                            <LocationOn className="userShowIcon"/>
                            <span className="userShowInforTitle">{user.address}</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Update</span>
                    <div className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Name</label>
                                <input type="text" onChange={e=>setNewName(e.target.value)} placeholder={user.name} className="userUpdateInput" />
                            </div>                        
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" onChange={e=>setNewPhone(e.target.value)} placeholder={user.phone} className="userUpdateInput" />
                            </div>                        
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" onChange={e=>setNewEmail(e.target.value)} placeholder={user.email} className="userUpdateInput" />
                            </div>                
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" onChange={e=>setNewAddress(e.target.value)} placeholder={user.address} className="userUpdateInput" />
                            </div>
                        </div> 
                        <div className="userUpdateRight">
                            <div className="OrderInfor" >
                                <div className="userOrder">
                                    <ShoppingCart className="orderIcon" />
                                    <span className="OrderCountTitle">Orders Count: </span>
                                    <span className="OrderCount">{order.length !== 0 ? getOrderUser(user._id).length:0}</span>
                                </div>
                                <div className="userOrder">
                                    <AttachMoney className="orderIcon" />
                                    <span className="OrderCountTitle">Total paid: </span>
                                    <span className="OrderCount">€{order.length !== 0 ? getOrderUser(user._id).reduce((acc,order)=> acc + order.totalPrice ,0):0}</span>
                                </div>
                            </div>
                            
                            <button className="userUpdateButton" onClick={()=>UpdateUser()}>Update</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>  
    )
}
