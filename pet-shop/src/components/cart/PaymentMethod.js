import { Container, Row, Col, Button, Input,Label} from "reactstrap"
import {useState} from "react"
import styles from "./sass/css/checkout.module.css";


function PaymentMethod() {
    const banks = [
    {
        name: 'Vietcombank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/1_logo_full.svg'
    },
    {
        name: 'BIDV',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/19_logo_full.svg'
    },
    {
        name: 'Argibank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/24_logo_full.svg'
    },
    {
        name: 'Viettinbank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/4_logo_full.svg'
    },
    {
        name: 'Techcombank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/2_logo_full.svg'
    },
    {
        name: 'Sacombank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/16_logo_full.svg'
    },
    {
        name: 'HDBank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/7_logo_full.svg'
    },
    {
        name: 'VPBank',
        img:'https://mtf.onepay.vn/paygate/assets/img/banklogo/14_logo_full.svg'
    },


]
    const methods = ['Momo','Online banking']
    const [method, setMethod] = useState(methods[0])
    const [choose, setChoose] = useState(banks[0]);
    const [cardNum, setCardNum] = useState()
    
    
    return (
        <div>
            <Input type='select' onChange={(e) => setMethod(e.target.value)} >
                {methods.map(method => <option>{method}</option>)}
            </Input>
            <div>
                { method === methods[1] && 
                (<div className={styles.bank}>
                    {banks.map(bank => <img
                     src={bank.img} 
                     className={styles.bankItem}  
                     alt={bank.name}
                     style = {choose.name === bank.name ? {outline:'1px solid blue',padding:'1px'}: {} }
                     onClick = {() => setChoose(bank)}
                     />)}
                    <Input onChange={(e) => setCardNum(e.target.value)} placeholder="Enter your card number"/>
                    
                </div>)} 
            </div>
        </div>
    )

    
}
export default PaymentMethod;