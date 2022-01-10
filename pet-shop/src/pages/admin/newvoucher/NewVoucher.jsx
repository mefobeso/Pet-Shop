import React,{useState} from 'react'
import "./newvoucher.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom';


export default function NewVoucher() {
    const history = useHistory()
    const [code,setCode] = useState()
    const [outDate,setOutDate] = useState()
    const [value,setValue] = useState()
    const [countUse,setCountUse] = useState()
    const [des,setDes] = useState()
    const CreateVoucher = () =>{
        axios.post('https://petshoptmdt.herokuapp.com/voucher',{
            voucherName:code.toUpperCase(),
            outDate:new Date(outDate),
            value: value,
            countUse: countUse,
            description:des
        }).then(res=>{
            
            alert(res.data.message)
            history.push("/admin/vouchers")
        })
    }
    return (
        <div className="newVoucher">
            <h1 className="newVoucherTitel">NEW VOUCHER</h1>
            <div className="newVoucherForm">
                <div className="newVoucherItem">
                    <label>Code</label>
                    <input type="text" onChange={e=>setCode(e.target.value)}   placeholder="Enter voucher Code"  />
                </div>
                <div className="newVoucherItem">
                    <label>Value</label>
                    <input type="number" min="1" onChange={e=>setValue(e.target.value)}  placeholder="Enter value"  />
                </div>
                <div className="newVoucherItem">
                    <label>Out Date</label>
                    <input type="datetime-local" onChange={e=>setOutDate(e.target.value)}  />
                </div>
                <div className="newVoucherItem">
                    <label>Count Uses</label>
                    <input type="number" min="1" onChange={e=>setCountUse(e.target.value)}  placeholder="Enter amount of using"  />
                </div>
                <div className="newVoucherItem">
                    <label>Description</label>
                    <input type="text" onChange={e=>setDes(e.target.value)}  placeholder="Enter description"  />
                </div>            
                <button className="submitNewVoucher" onClick={()=>CreateVoucher()} >Create</button>
            </div>
        </div>
    )
}
