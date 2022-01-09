import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom'
import "./voucherdetail.css"

export default function VoucherDetail() {
    const {id} = useParams()
    const [voucher,setVoucher] = useState({})
    useEffect(()=>{
        axios.get(`https://petshoptmdt.herokuapp.com/voucher/${id}`)
        .then(res=>{
            console.log(res.data.voucher)
            setVoucher(res.data.voucher)})
        
    },[])
    return (
        <div className="voucherDetail">
            <h1 className="voucherDetailTitle">Voucher Details</h1>
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
                            <input type="text" className="inputUpdateVoucher" placeholder={voucher.voucherName} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Value</label>
                            <input type="text" className="inputUpdateVoucher" placeholder={voucher.value} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Uses remaining</label>
                            <input type="text" className="inputUpdateVoucher" placeholder={voucher.outDate? voucher.outDate.slice(0,10): ""} />
                        </div>
                        <div className="voucherUpdateItem">
                            <label htmlFor="">Description</label>
                            <input type="text" className="inputUpdateVoucher" placeholder={voucher.description} />
                        </div>
                    </div>
                    <button className="updateButton">Update</button>
                </div>
                </div>
            </div>
        </div>
    )
}
