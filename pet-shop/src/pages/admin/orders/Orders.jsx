import React,{useState,useEffect} from 'react'
import "./orders.css"
import { DataGrid } from '@material-ui/data-grid';
import {FileCopy} from '@material-ui/icons';
import {Link} from "react-router-dom"
import axios from 'axios'

export default function Orders() {
    
    const CloneProduct = async (id) =>{
        // await axios.post(`https://design-pattern-project.herokuapp.com/brands/dup/${id}`)
        // await axios.get('https://design-pattern-project.herokuapp.com/brands')
        // .then(res=>{setBrand(res.data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})
    }

    const columns = [
        { field: 'id', headerName: 'STT', width: 110 },
        {
          field: 'name',
          headerName: 'Name',
          width: 130,
        },
        {
          field: 'totalPrice',
          headerName: 'Total (€)',
          width: 140,
        },
        {
          field: 'address',
          headerName: 'Address',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 220,
          
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 120,
            sortable: false
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field:"action",
            sortable: false,
            headerName:"Action",
            width:180,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/admin/orders/" + params.row._id}>
                    <button className="ordersEdit">Edit</button>
                    </Link>
                    
                    </>
                )
            }
        }
      ];
    const [rowData,setRowData] = useState([])

    useEffect(()=>{
        axios.get('https://design-pattern-project.herokuapp.com/orders')
        .then(res=>{
         setRowData(res.data
         .map((data,index)=> Object.defineProperty(data,'id',{value:index+1,writable:false}))
         )
         })
         .catch(err=>console.error(err)) 
         
     },[])

    return (
        <div className="ordersList">
            <h2 className="userTitle">Orders</h2>
            <DataGrid
            disableSelectionOnClick
        rows={rowData}
        columns={columns}
        pageSize={5}
        

      />
        </div>
    )
}
