import {Form,FormGroup, Container, Row, Col, Button, Input,Label} from "reactstrap"
import {useMemo, useState} from "react"
import {Link,useLocation} from "react-router-dom"

import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sass/css/checkout.module.css";


function OrderedCart (){

    const carts =  JSON.parse(localStorage.getItem('cart'))
    const location = useLocation()
    
    const data = location.state;
    console.log(data)
return (<div>
<Headerwhite/>
<Container>
    <Row>
        <Col className={styles.heading}>
            <h2>Thanks for your order</h2>
            <h4>Your delivery will come as soon as possible</h4>
        </Col>
    </Row>
    <Row className={styles.detail}>
        <Col><h4>Products</h4>
        <div>
            {data.cart.map(item =>(<div className={styles.product}>
                <img src={item.img}  alt="" />
                <div className={styles.inforPro}>
                    <div className={styles.namePro}>{item.name}</div>
                    <div className={styles.quantityPro}> x{item.amount}</div>
                    <div className={styles.pricePro}>${item.price} </div>
                </div>
                
            </div>))}
            
        </div>
        </Col>
        <Col>
        <h4>Informations</h4>
            <div className={styles.infor}>
                <div><FontAwesomeIcon icon="user-circle" className={styles.inforicon}/> Name of receiver: {data.receiver}</div>
                <div><FontAwesomeIcon icon="home" className={styles.inforicon} />  Delivery address: {data.address}</div>    
                <div><FontAwesomeIcon icon="phone" className={styles.inforicon} />  Phone number: {data.phone}</div>    
                <div><FontAwesomeIcon icon="dollar-sign" className={styles.inforicon} /> Total payment: {data.cost}$</div>    
            </div>
        </Col>
    </Row>
    <div className={styles.btnBack}>
             
                <Link to="/home" ><Button> <FontAwesomeIcon icon="chevron-left" />  Back to Home</Button></Link>
        
    </div>
</Container>
<Footerwhite/>
</div>)
}
export default OrderedCart;