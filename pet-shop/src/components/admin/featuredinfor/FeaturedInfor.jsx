import React,{useState,useEffect} from 'react'
import "./featuredinfor.css"
import { ArrowDownward,ArrowUpward} from '@material-ui/icons';
import axios from 'axios'

export default function FeaturedInfor() {
    const [orders,setOrders]= useState([])
    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/bill',{
            // headers:{"Authorization": localStorage.getItem('token')},
        })
        .then(res=>{
            setOrders(res.data.bills)
        })
    },[])
    const calcMonth = (date)=>{
        return Number.parseInt(date.slice(5,7))
    }
    const GetTotalLastMonth = ()=>{
        const today = new Date()
        var lastMonth = today.getMonth()+12
        const ordersLastMonth = orders.filter(item => calcMonth(item.date) === lastMonth && item.status === "Confirmed")
        
        const totalLastMonth = ordersLastMonth.reduce((acc,item)=>{
            return acc + item.totalPrice
        },0)
        return totalLastMonth
    }
    const percentCompare = ()=>{
        if(!GetTotalLastMonth()) return 0;
        return ((GetTotalThisMonth()*100)/GetTotalLastMonth()).toFixed(1)
    }
    const GetTotalThisMonth = ()=>{
        const today = new Date()
        var thisMonth = today.getMonth()+1
        const ordersThisMonth = orders.filter(item => calcMonth(item.date) === thisMonth && item.status === "Confirmed")
        const totalThisMonth = ordersThisMonth.reduce((acc,item)=>{
            return acc + item.totalPrice
        },0)
        return totalThisMonth
    }
    const CountSoldItemsThisMonth = ()=>{
        const today = new Date()
        var thisMonth = today.getMonth()+1
        const ordersThisMonth = orders.filter(item => calcMonth(item.date) === thisMonth && item.status === "Confirmed")
        const productsInOrders = []
      
        ordersThisMonth.map(item=> item.details.map(product=>productsInOrders.push(product)))   
     
        const totalItemThisMonth =  productsInOrders.reduce((acc,product)=> acc+product.amount,0)
        return totalItemThisMonth
    }
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Sales This Month</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${orders.length !==0 ? GetTotalThisMonth() : 0}</span>
                    <span className="featuredMoneyRate">
                        {orders.length !==0 ? percentCompare() < 100? 100 - percentCompare(): (percentCompare() -100).toFixed(1)  : 0}% {percentCompare() >100 ?<ArrowUpward className="featuredIcon "/>: <ArrowDownward className="featuredIcon negative"/>}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Items Quantity Sales This Month</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{orders.length !==0 ? CountSoldItemsThisMonth() : 0}</span>
                </div>
                <span className="featuredSub">Goal: 50 items</span>
            </div>
        </div>
    )
}
