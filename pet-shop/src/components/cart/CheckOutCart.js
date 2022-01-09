import {Form,FormGroup, Container, Row, Col, Button, Input,Label} from "reactstrap"
import {useMemo, useState,useEffect} from "react"
import {Link,useHistory} from "react-router-dom"
import axios from "axios"

import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import styles from "./sass/css/checkout.module.css";
import  PaymentMethod from "./PaymentMethod"




function CheckOutCart (){   
    const history = useHistory();
    const cart =  JSON.parse(localStorage.getItem('cart'))
    const user_id = JSON.parse(localStorage.getItem('user'))
    const total = useMemo(()=>{
        return (cart.reduce((cost,curr) => {
            return cost + curr.price * curr.amount
        },0))
    },[cart])
    
    
    const shipFee = total > 200 ? 0: 2;
    const cost = shipFee + total
    const [receiver,setReceiver] =  useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [payMethod,setPayMethod] = useState("")
    const [products,setProducts] = useState([])
    const [paySuccess, setPaySuccess] = useState(false)

    const getPaySuccess = (flag)=>{
        setPaySuccess(flag)
    }
    
    useEffect(() =>{
        console.log(cart)
        cart.map(item=>{
            setProducts(pre=>[
                ...pre,{
                        product_id:item.id,
                        amount:item.amount,
                        price:item.price
                }
            ])
        })
    },[])

    const checkOut = ()=>{
        var method = payMethod.toLowerCase()

        
        if(method === "paypal"){
            if(paySuccess===true){
                history.push({
                    pathname:'/home/cart/checkout',
                    state: {receiver,address,phone, cost,cart}
                })
            }
        }
        else if (method === "cash on delivery"){
            axios.post("http://localhost:5000/bill",{
                details:products,
                phone,
                address,
                name:receiver,
                user_id:user_id.id,
                paymentMethod:payMethod,
                totalPrice:cost
            })
            history.push({
                pathname:'/home/cart/checkout',
                state: {receiver,address,phone, cost,cart}
            })
        }
        else if (method === "online banking"){
            axios.post("http://localhost:5000/bill",{
                details:products,
                phone,
                address,
                name:receiver,
                user_id:user_id.id, 
                paymentMethod:payMethod,
                totalPrice:cost
            })
            history.push({
                pathname:'/home/cart/checkout',
                state: {receiver,address,phone, cost,cart}
            })
        }

    }

    const getMethod = (method)=>{
        setPayMethod(method)
    }
    
    const handleSubmit = (e) =>{
        console.log(receiver,address,phone)
        e.preventDefault()
    }

    return (
        <div>
            <Headerwhite/>
        <Container>
            <div className={styles.heading}>
            <h1>Payment</h1>
            <h4>Please choose one below</h4>
            </div>
            <Row xs="2" sm="3" >
            <Col><h3>Payment method </h3>
            <PaymentMethod getMethod={getMethod} phone={phone} address={address} receiver={receiver} paySuccess={getPaySuccess} total={cost} />
            </Col>
            <Col>    
            </Col>
            <Col>
            
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <h3>Information</h3>
                <div className={styles.inforItem}>
                    <label> Reciever </label>
                    <input required onChange={(e) => setReceiver(e.target.value)}  value ={receiver} placeholder="Enter name" />
                </div>
                <div className={styles.inforItem}>
                    <label> Address </label>
                    <input required onChange={(e) => setAddress(e.target.value)}  value={address} placeholder="Enter address" />
                </div>
                <div className={styles.inforItem}>
                    <label> Phone Number </label>
                    <input required  type="tel" onChange={(e) => setPhone(e.target.value)}  value={phone} placeholder="Enter phone number" />
                </div>
                    </FormGroup>
            <br/>
            <br/>
            <br/>
            <div className={styles.totalForm}>
                <h3><strong>Total:</strong></h3>
                <div><strong>Price:</strong>    ${total} </div>
                <div><strong>Ship fee:</strong>    ${shipFee} </div>
                <hr/>
                <div><strong>Total:</strong>    ${cost} </div>
                        <Button onClick={checkOut} >Confirm</Button>
            </div>
            </form>
            </Col>

            </Row>
        </Container>
            <Footerwhite/>
        </div>
    )
}

export default CheckOutCart;