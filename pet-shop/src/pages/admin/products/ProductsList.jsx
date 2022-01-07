import React,{useState,useEffect} from 'react'
import "./productslist.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline, FileCopy} from '@material-ui/icons';
import {Link} from "react-router-dom"
import axios from 'axios'

export default function ProductsList() {

    const CloneProduct = async (id) =>{
        // await axios.post(`https://design-pattern-project.herokuapp.com/brands/dup/${id}`)
        // await axios.get('https://design-pattern-project.herokuapp.com/brands')
        // .then(res=>{setBrand(res.data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})
    }
    const columns = [
        { field: 'id', headerName: 'STT', width: 90,sortable: false, },
        
        {
            field: 'img',
            headerName: 'Image',
            width: 130,
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
            width: 180,
          },
          {
            field: 'category_id',
            headerName: 'Category',
            width: 140,
            renderCell:(params)=>{
                return(
                    <div>
                        {params.row.category_id.name}
                    </div>
                )
            }
        },
        {
          field: 'price',
          headerName: 'Price (€)',
          sortable: true,
          type:'number',
          width: 130,
          
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
            width:200,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/admin/products/" + params.row._id}>
                    <button className="productsListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productsListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    <button className="dupProduct" onClick={()=>CloneProduct(params.row._id)}><FileCopy /> Clone</button>
                    </>
                )
            }
        }
      ];
      const handleDelete = (id) =>{
        setRowData(rowData.filter(item=>item._id !== id))
        axios.delete(`https://design-pattern-project.herokuapp.com/products/${id}`)
    }
      const [rowData,setRowData] = useState([])
      useEffect(()=>{
        axios.get('https://design-pattern-project.herokuapp.com/products')
        .then(res=>{
         setRowData(res.data
         .map((data,index)=> { 
             return (
                 Object.defineProperties(data,{
                        id:{value:index+1,writable:false}
                    ,
                    img:{value:data.image[0], writable:false}
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
