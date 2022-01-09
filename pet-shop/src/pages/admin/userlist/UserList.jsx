import React,{useState,useEffect} from 'react'
import "./userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {Link} from "react-router-dom"
import axios from 'axios'


  
 
export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'STT', width: 110 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'address',
          headerName: 'Address',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 120,
            sortable: false
        },
        {
            field:"action",
            headerName:"Action",
            width:350,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/admin/users/" + params.row._id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];

    const [rowData,setRowData] = useState([])
    const handleDelete = (id) =>{
        setRowData(rowData.filter(item=>item._id !== id))
        axios.delete(`https://petshoptmdt.herokuapp.com/auth/${id}`)
    }
    useEffect(()=>{
       axios.get('https://petshoptmdt.herokuapp.com/auth')
       .then(res=>{
        setRowData(res.data.accounts
        .filter(user=>user.role_id === '61cea5e5d6d3f5dae84b4406')
        .map((data,index)=> Object.defineProperty(data,'id',{value:index+1,writable:false}))
        )
        })
        .catch(err=>console.error(err)) 
        
    },[])
    
    return (
        <div className="userList">
            <h2 className="userTitle">USERS</h2>
            <DataGrid
            disableSelectionOnClick
        rows={rowData}
        columns={columns}
        pageSize={5}

      />
        </div>
    )
}
