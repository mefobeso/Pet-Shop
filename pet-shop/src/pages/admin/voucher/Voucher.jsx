import React,{useState,useEffect} from 'react'
import "./voucher.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {Link} from "react-router-dom"
import axios from 'axios'

export default function Voucher() {
    const [rowData,setRowData] = useState([])
    const handleDelete = (id) =>{
        setRowData(rowData.filter(item=>item._id !== id))
        axios.delete(`https://petshoptmdt.herokuapp.com/voucher/${id}`)
    }

    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/voucher')
        .then(res=>{
         setRowData(res.data.vouchers.map((data,index)=> Object.defineProperty(data,'id',{value:index+1,writable:false}))
         )
         })
         .catch(err=>console.error(err)) 
         
     },[])
    const columns = [
        { field: 'id', headerName: 'STT', width: 110 },
        {
          field: 'voucherName',
          headerName: 'Voucher',
          width: 150,
        },
        {
          field: 'value',
          headerName: 'Value (%)',
          width: 150,
          type: 'number',
        },
        {
          field: 'outDate',
          headerName: 'Out Date',
          width: 160,
          renderCell:(params)=>{
              return(
                  <span>{params.row.outDate.slice(0,10)}</span>
              )
          }
        },
        {
            field: 'countUse',
            headerName: 'Uses remaining',
            width: 180,
            type: 'number',
        },
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/admin/vouchers/" + params.row._id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];
    return (
        <div className="voucher">
            <h2 className="voucherTitle">Vouchers List</h2>
            <DataGrid
            disableSelectionOnClick
            rows={rowData}
            columns={columns}
            pageSize={5}

            />
        </div>
    )
}
