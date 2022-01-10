import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
import "./voucherdetail.css"

export default function VoucherDetail() {
    const {id} = useParams()
    const [voucher,setVoucher] = useState({})
    const [code,setCode] = useState()
    const [value,setValue] = useState()
    const [outDate,setOutDate] = useState()
    const [des,setDes] = useState()
    const handleUpdate = async () =>{
        await axios.put(`https://petshoptmdt.herokuapp.com/voucher/${id}`,{
            voucherName:code,
            value:value,
            outDate:new Date(outDate),
            description:des
        })
        .then(res=>alert(res.data.message))
        await axios.get(`https://petshoptmdt.herokuapp.com/voucher/${id}`)
        .then(res=>{
            setVoucher(res.data.voucher)})
    }
    useEffect(()=>{
        axios.get(`https://petshoptmdt.herokuapp.com/voucher/${id}`)
        .then(res=>{
            setVoucher(res.data.voucher)})
        
    },[])
    return (
        <div className="voucherDetail">
            <div className="VoucherDetailTop">
            <h1 className="voucherDetailTitle">Voucher Details</h1>
            <Link to="/admin/newvoucher">
                    <button className="addButton">Create</button>
                </Link>
            </div>
            <div className="voucherDetailContainer">
                <div className="voucherDetailLeft">
                    <h3 className="leftTitle">Informations</h3>
                    <div className="voucherInfor">
                        <div className="voucherInforItem">
                            <span className="voucherKey">Code</span>
                            <span className="voucherValue">{voucher.voucherName}</span>
                        </div>
                        <div className="voucherInforItem">
                            <span className="voucherKey">Value</span>
                            <span className="voucherValue">{voucher.value}</span>
                        </div>
                        <div className="voucherInforItem">
                            <span className="voucherKey">Uses remaining</span>
                            <span className="voucherValue">{voucher.countUse}</span>
                        </div>
                        <div className="voucherInforItem">
                            <span className="voucherKey">Out Date</span>
                            <span className="voucherValue">{voucher.outDate? voucher.outDate.slice(0,10): ""}</span>
                        </div>
                        <div className="voucherInforItem">
                            <span className="voucherKey">Description</span>
                            <span className="voucherValue">{voucher.description}</span>
                        </div>
                    </div>
                </div>
                <div className="voucherDetailRight">
                    <h3 className="rightTitle">Update</h3>
                    <div className="voucherUpdate">
                    <div className="voucherUpdateContainer">
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Code</label>
                            <input type="text" className="inputUpdateVoucher" onChange={e=>setCode(e.target.value)} placeholder={voucher.voucherName} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Value</label>
                            <input type="number" className="inputUpdateVoucher" onChange={e=>setValue(e.target.value)} placeholder={voucher.value} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Out Date</label>
                            <input type="datetime-local" className="inputUpdateVoucher" onChange={e=>setOutDate(e.target.value)} placeholder={voucher.outDate? voucher.outDate.slice(0,10): ""} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Description</label>
                            <input type="text" className="inputUpdateVoucher" onChange={e=>setDes(e.target.value)} placeholder={voucher.description} />
                        </div>
                    </div>
                    <button className="updateButton" onClick={()=>handleUpdate()}>Update</button>
                </div>
                </div>
            </div>
        </div>
    )
}
