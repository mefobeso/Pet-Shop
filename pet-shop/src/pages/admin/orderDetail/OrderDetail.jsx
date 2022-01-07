import React,{ useEffect,useState } from 'react'
import './orderdetail.css'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
import {Info,ShoppingCart,PersonOutline,LabelImportant, LocalAtm, PhoneAndroid,Home,CalendarToday,Comment } from '@material-ui/icons'

export default function OrderDetail() {
    const {id} = useParams()
    const history = useHistory()
    const [order,setOrder] = useState({})
    const [status,setStatus] = useState()
    const [products,setProducts] = useState([])
    
    const getProduct = (id) =>{
     const product =  products.find(item=>
            item._id === id
        )
        return product
    }
    const totalPerPro = (count,price)=> count * price

    const UpdateStatus = async () =>{
        await axios.put(`https://design-pattern-project.herokuapp.com/orders/${id}`,{
            status:status,
            updatedAt: new Date()
        })
        .then(res=>alert(res.data))
        .catch(err=>console.log(err))
        await axios.get(`https://design-pattern-project.herokuapp.com/orders/${id}`)
        .then(res=>setOrder(res.data))
       
    }

    useEffect(()=>{
        axios.get(`https://design-pattern-project.herokuapp.com/orders/${id}`)
        .then(res=>setOrder(res.data))
        axios.get(`https://design-pattern-project.herokuapp.com/products/`)
        .then(res=>setProducts(res.data))
    },[])
    return (
        <div className="orderDetail">
            <h1 className="orderTitle">Order Detail</h1>
            <div className="orderDetailInfor">
                <div className="orderDetailLeft">
                    <div className="orderDetailLeftTop">
                        <h2 className="inforTitle"><Info className="IconKey" />   Informations</h2>
                        <div className="inforItem">
                            <PersonOutline className="inforKeyName"/>
                            <span className="inforValueName">{order.name}</span>
                        </div>
                    </div>
                    <div className="orderDetailLeftBottom">
                        
                        {/* <div className="inforItem">
                            <span className="inforKey"><LocalAtm/> Total</span>
                            <span className="inforValue">€200 </span>
                        </div> */}
                        <div className="inforItem">
                            <span className="inforKey"><PhoneAndroid className="IconKey"/> Phone</span>
                            <span className="inforValue">{order.phone}</span>
                        </div>
                        <div className="inforItem">
                            <span className="inforKey"><Home className="IconKey" /> Address</span>
                            <span className="inforValue">{order.address}</span>
                        </div>
                        <div className="inforItem">
                            <span className="inforKey"><CalendarToday className="IconKey" /> Create At</span>
                            <span className="inforValue">{order.createdAt ? order.createdAt.slice(0,10) : ""}</span>
                        </div>
                        <div className="inforItem">
                            <span className="inforKey"><CalendarToday className="IconKey" /> Update At</span>
                            <span className="inforValue">{order.updatedAt ? order.updatedAt.slice(0,10) : "" }</span>
                        </div>
                        <div className="inforItem">
                            <span className="inforKey"><LabelImportant className="IconKey" />Status</span>
                            <select name="status" id="status" onChange={e=>setStatus(e.target.value)} className={`selectorStatus statusSelect ${order.status}`}>
                                <option className={`statusSelect ${order.status}`} value={order.status} hidden selected>{order.status}</option>
                                <option className='statusSelect Pending' value="Pending">Pending</option>
                                <option className='statusSelect Approved' value="Approved">Approved</option>
                                <option className='statusSelect Declined' value="Declined">Declined</option>
                            </select>
                        </div>
                        <div className="inforItem">
                            <span className="inforKey"><Comment className="IconKey" />Notes</span>
                            <textarea name="" id="" cols="3" rows="4" readOnly value={order.notes}/>
                        </div>
                        <button className="updateOrder" onClick={()=>UpdateStatus()}>Update</button>
                    </div>
                </div>
                <div className="orderDetailRight">
                    <div className="orderDetailRightTop">
                        <h2 className="inforTitle"><ShoppingCart className="IconKey"/> Cart</h2>
                    </div>
                    <div className="orderDetailCart">
                        <table className="OrderDetailTable">
                            <tr>
                                <th className="DetailCartTh" >Image</th>
                                <th className="DetailCartTh" >Name</th>
                                <th className="DetailCartTh" >Count</th>
                                <th className="DetailCartTh" >Price</th>
                                <th className="DetailCartTh" >Total</th>
                            </tr>
                            {order.products &&
                             order.products.map((item,index)=>
                                <tr key={index}>
                                <td>
                                    <img src={products.length !== 0 ? getProduct(item.product_id).image[0] : ""} alt="" className="proImg" />
                                </td>
                                <td>
                                    <div className="proValueName">
                                           {products.length !== 0 ? getProduct(item.product_id).name: "name"}
                                    </div>
                                </td>
                                <td>
                                    <div className="proValue">
                                        x{item.count}
                                    </div>
                                </td>
                                <td>
                                    <div className="proValue">
                                        €{item.price ? item.price : products.length !== 0 ? getProduct(item.product_id).price:"" }
                                    </div>
                                </td>
                                <td>
                                    <div className="proValue">
                                    €{item.price ? totalPerPro(item.count, item.price)  : totalPerPro(item.count, products.length !== 0 ? getProduct(item.product_id).price : 1) }
                                    </div>
                                </td>
                            </tr>
                            )}
                            
                        </table>
                        <div className="TotalCart">Total: €{order.totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
