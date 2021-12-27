import {Form,FormGroup, Container, Row, Col, Button, Input,Label} from "reactstrap"
import {useMemo, useState} from "react"
import {Link} from "react-router-dom"

import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import styles from "./sass/css/checkout.module.css";
import  PaymentMethod from "./PaymentMethod"




function CheckOutCart (){   
    const cart =  JSON.parse(localStorage.getItem('cart'))
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
            <PaymentMethod/>
            </Col>
            <Col>    
            </Col>
            <Col>
            
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <h3>Information</h3>
                <div>
                    <Label> Reciever</Label>
                    <Input required onChange={(e) => setReceiver(e.target.value)} value ={receiver} placeholder="Enter name" />
                </div>
                <div>
                    <Label> Address</Label>
                    <Input required onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Enter address" />
                </div>
                <div>
                    <Label> Phone Number</Label>
                    <Input required  type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Enter phone number" />
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
                <Link to={{
                    pathname:"/home/cart/checkout",
                    state: {receiver,address,phone, cost}
                    }} >
                        <Button >Confirm</Button>
                </Link>
            </div>
            </Form>
            </Col>

            </Row>
        </Container>
            <Footerwhite/>
        </div>
    )
}

export default CheckOutCart;