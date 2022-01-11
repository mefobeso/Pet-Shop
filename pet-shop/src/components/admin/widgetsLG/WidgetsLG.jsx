import React,{useState,useEffect} from 'react'
import "./widgetslg.css"
import axios from 'axios'
import ButtonStatus from '../ButtonStatus'


export default function WidgetsLG() {

    const [orders,setOrders] = useState([])
    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/bill/',{
            // headers:{"Authorization": localStorage.getItem('token')}
        })
        .then(res=>setOrders(res.data.bills))
    },[])
    const Get3NewOrders = () =>{
        return orders.splice(orders.length-4, 4)
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Lastest Transactions </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {orders.length !== 0 ? Get3NewOrders().map(order => 
                    <tr className="widgetLgTr">
                        <td className="wigdetLgUser">
                            <span className="widgetLgUsername">{order.name}</span>
                        </td>
                        <td className="WidgetLgDate">{order.date.slice(0,10)}</td>
                        <td className="WidgetLgAmount">${order.totalPrice}</td>
                        <td className="WidgetLgStatus"><ButtonStatus type={order.status}></ButtonStatus></td>
                    </tr>
                )
                
                : ""}
                
                
                
            </table>
        </div>
    )
}

