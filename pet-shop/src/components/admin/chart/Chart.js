import React,{ useState, useEffect} from 'react'
import "./chart.css"
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const [bill,setBill] = useState([])
    const [data,setData] = useState([])
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']
    useEffect(() => {
        getMonths(new Date())
        axios.get("https://petshoptmdt.herokuapp.com/bill")
        .then(res=>{
            const arr = []
            const revenue = (month) =>{
                const ordersMonth = res.data.bills.filter(item => new Date(item.date).getMonth() === month && item.status === "Confirmed")
                const totalMonth = ordersMonth.reduce((acc,item)=>{
                    return acc + item.totalPrice
                },0)
                return totalMonth
            } 
                months.map((item,index) => {   
                    const object = {}
                    object.name = getMonths(index)
                    object.Revenue = revenue(index)
                    arr.push(object)
                })
                setData(arr)
            
        })
    },[])

    const getMonths = (month)=>{   
        return months.find((item,index) => index === month )
    }
   
    return (
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
            {data.length !== 0 && 
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />
                
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        }
        </div>
    )
}
