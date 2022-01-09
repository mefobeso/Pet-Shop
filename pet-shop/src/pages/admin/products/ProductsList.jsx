import React,{useState,useEffect} from 'react'
import "./productslist.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline, FileCopy} from '@material-ui/icons';
import {Link} from "react-router-dom"
import axios from 'axios'

export default function ProductsList() {

    const columns = [
        { field: 'id', headerName: 'STT', width: 90,sortable: false, },
        
        {
            field: 'img',
            headerName: 'Image',
            width: 130,
            height:80,
            renderCell:(params)=>{
                return(
                    <div>
                        <img className="productListImg" src={params.row.img} alt="" />
                    </div>
                )
            },
            sortable: false
            
          },
        {
            field: 'name',
            headerName: 'Name',
            width: 220,
          },
        {
          field: 'price',
          headerName: 'Price ($)',
          sortable: true,
          type:'number',
          width: 150,
          
        },
          {
            field: 'quantity',
            headerName: 'Stocks',
            type: 'number',
            width: 120,    
          },
          
        {
            field:"action",
            headerName:"Action",
            width:300,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/admin/products/" + params.row._id}>
                    <button className="productsListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productsListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];
      const handleDelete = (id) =>{
        setRowData(rowData.filter(item=>item._id !== id))
        axios.delete(`https://petshoptmdt.herokuapp.com/products/${id}`)
    }
      const [rowData,setRowData] = useState([])
      useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/products')
        .then(res=>{
         setRowData(res.data.Products.map((data,index)=> { 
             return (
                 Object.defineProperties(data,{
                        id:{value:index+1,writable:false},
                    img:{value:data.img[0], writable:false}
                })
             )

            }
         )
         )
         })
         .catch(err=>console.error(err)) 
         
     },[])
    return (
        <div className="productsList">
            <h2 className="productsTitle">Products</h2>
            <DataGrid
            disableSelectionOnClick
            rows={rowData}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    )
}
