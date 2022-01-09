import React,{useState,useEffect} from 'react'
import "./category.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline,FileCopy} from '@material-ui/icons';
import {Add} from '@material-ui/icons';
import axios from 'axios'

export default function BrandList() {
    const [cate,setCate] = useState([])
    const [cateName,setCateName] = useState()
    const [newCate,setNewCate] = useState()

    
    const handleDeleteCate = (id) =>{
        axios.delete(`https://petshoptmdt.herokuapp.com/category/${id}`)
        setCate(cate.filter(item=>item._id !== id))
    } 

    const handleSaveCate = (id) =>{
        axios.put(`https://petshoptmdt.herokuapp.com/category/${id}`,{
            cateName:cateName
        })
        .then(res=>alert(res.data.message))
        .catch(err=>console.log(err))
        const updatedCateIndex = cate.findIndex(item => item._id === id)
        const newData = [...cate]
        const updatedCate = {...cate[updatedCateIndex], name: cateName}
        newData[updatedCateIndex] = updatedCate
        newData.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false}))
        setCate(newData)
    }
    

    const AddNewCategory = async () =>{
        await axios.post("https://petshoptmdt.herokuapp.com/category",{cateName:newCate})
        .then(res=>{
            alert(res.data.message);
            setNewCate('')
        })
        .catch(err=>console.log(err))
        await axios.get('https://petshoptmdt.herokuapp.com/category')
        .then(res=>{setCate(res.data.cates.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})
    }
    useEffect(()=>{
        axios.get(`https://petshoptmdt.herokuapp.com/category`)
        .then(res=> setCate(res.data.cates.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false}))))
    
    },[])

    

    const columnsCate = [
        { field: 'id', headerName: 'STT', width: 120 },
        {
          field: 'cateName',
          headerName: 'Category name',
          width:200,
          renderCell:(params)=>{
            return(
                <input type="text" className="inputUpdate" defaultValue={params.row.cateName} onChange={e=>{setCateName(e.target.value)}} />
            )
        }
        },
        
        {
            field:"action",
            headerName:"Action",
            width:120,
            sortable: false,
            renderCell: (params)=>{
                return(
                    <>     
                    <button className="listEdit" onClick={()=>handleSaveCate(params.row._id)} >Save</button>                 
                    <DeleteOutline className="listDelete" onClick={()=>handleDeleteCate(params.row._id)}/>
                    </>
                )
            }
        }
      ];
      
      

    return (
        <div className="brandcate">
            <div className="bcContainer">
                <div className="categoryList">
                    <h2 className="userTitle">Category</h2>
                    <DataGrid
                    disableSelectionOnClick
                    rows={cate}
                    columns={columnsCate}
                    pageSize={5}
                    
                    disableSelectionOnClick
                    />
                </div>
                
            </div>
            <div className="newBrandCate">
                <div className="newItem">
                    <label>New Category Name:</label>
                    <input type="text" className="addNew" onChange={(e)=>setNewCate(e.target.value)} placeholder="Enter Category Name"/>
                    <button className="addNewButton" onClick={()=>AddNewCategory()}><Add/></button>
                </div>
            </div>
        </div>
    )
}
