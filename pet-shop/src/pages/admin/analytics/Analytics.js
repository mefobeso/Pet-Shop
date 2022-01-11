import React,{useState,useEffect} from 'react'
import './analytics.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Analytics() {
    
    const [bill,setBill] = useState([])
    const history = useHistory()

    useEffect(() => {
      if(!localStorage.getItem('token')){
          history.push('/adminLogin')
      }
    })
    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/bill/')
        .then(res=>{ 
            setBill(res.data.bills)
        })
    },[])
    const CountedOrder = (status) => bill.filter(item => item.status.toLowerCase() === status.toLowerCase()).length
    const getPercent = (counted) => (counted*100/bill.length).toFixed(1)
    const getTotal = function (){
       const orders = bill.filter(item => item.status === "Confirmed")
        var total = orders.reduce((total, item) => total + item.totalPrice,0)
        return total
    }
    return (
        <div className="analytics-container">
            <h2 className="analytics-Title">Analytics</h2>
            <div className="analytics-content">
                <div className="analytics-item Confirmed">
                    <h3 className="analytics-itemTitle ">Order Confirmed</h3>
                    <div className="analytics-itemValue">
                        <span className="analytics-Value">{CountedOrder('confirmed')}</span>
                        <span className="analytics-percent">Rate: {getPercent(CountedOrder('confirmed'))}%</span>
                    </div>
                </div>
                <div className="analytics-item Pending">
                    <h3 className="analytics-itemTitle ">Order Pending</h3>
                    <div className="analytics-itemValue">
                        <span className="analytics-Value">{CountedOrder('pending')}</span>
                        <span className="analytics-percent">Rate: {getPercent(CountedOrder('pending'))}%</span>
                    </div>
                </div>
                <div className="analytics-item Canceled">
                    <h3 className="analytics-itemTitle ">Order Canceled</h3>
                    <div className="analytics-itemValue">
                        <span className="analytics-Value">{CountedOrder('canceled')}</span>
                        <span className="analytics-percent">Rate: {getPercent(CountedOrder('canceled'))}%</span>
                    </div>
                </div>
                <div className="analytics-item Total">
                    <h3 className="analytics-itemTitle ">Total Revenue</h3>
                    <div className="analytics-itemValue">
                        <span className="analytics-Value">{getTotal()}$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
