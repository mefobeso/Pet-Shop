import React,{ useRef, useState, useEffect} from 'react'


export default function PayPal() {
    const cart =  JSON.parse(localStorage.getItem('cart'))
    const paypal = useRef() 
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions, err) =>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units:cart.map(item=>{
                        return({
                            description:item.name,
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
