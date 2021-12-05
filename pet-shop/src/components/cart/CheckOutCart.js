import { Container, Row, Col, Button, Input,Label} from "reactstrap"
import {useMemo} from "react"

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
            <Col></Col>
            <Col>
            <div>
                <h3>Information</h3>
                <div>
                    <Label> Bank account name</Label>
                    <Input onChange={() => ('')} value="Nguyễn Văn A"/>
                </div>
                <div>
                    <Label> Account Balance</Label>
                    <Input onChange={() => ('')} value="$4000.0"/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={styles.totalForm}>
                <h3><strong>Total:</strong></h3>
                <div><strong>Price:</strong>    ${total} </div>
                <div><strong>Ship fee:</strong>    ${shipFee} </div>
                <hr/>
                <div><strong>Total:</strong>    ${total + shipFee} </div>
                <Button >Confirm</Button>
            </div>
            
            </Col>

            </Row>
        </Container>
            <Footerwhite/>
        </div>
    )
}

export default CheckOutCart;