import React,{ useRef, useState, useEffect} from 'react'
import axios from 'axios'


export default function PayPal({phone,address,receiver,paySuccess}) {
    const cart =  JSON.parse(localStorage.getItem('cart'))
    const userid = JSON.parse(localStorage.getItem('user'))
    const [products,setProducts] = useState([])
    const paypal = useRef() 
    useEffect(()=>{
        
        window.paypal.Buttons({
            createOrder:(data,actions, err) =>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units:cart.map(item=>{
                        return({
                            description:item.name,
                            reference_id:item.id,
                            amount:{
                                value:item.price*item.amount,
                                currency_code:"USD"
                            }
                        })
                    })                   
                })
            },
            //Khi chấp nhận thanh toán
            onApprove: async(data,actions)=>{
                const order = await actions.order.capture()
                axios.post("https://petshoptmdt.herokuapp.com/bill",{
                    details:cart.map(item=>{
                        return ({
                            product_id:item.id, 
                            amount:item.amount,
                            price:item.price
                        })
                    }),
                    phone,
                    address,
                    name:receiver,
                    user_id:userid.id
                })
                paySuccess(true)
                console.log(order)
            },
            onError:(err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    },[])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
