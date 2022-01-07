import React,{useState,useEffect} from 'react'
import "./brandCate.css"
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline,FileCopy} from '@material-ui/icons';
import {Add} from '@material-ui/icons';
import axios from 'axios'

export default function BrandList() {
    const [cate,setCate] = useState([])
    const [brand,setBrand] = useState([])
    const [brandName,setBrandName] = useState()
    const [cateName,setCateName] = useState()
    const [newCate,setNewCate] = useState()
    const [newBrand,setNewBrand] = useState()

    const CloneBrand = async (id) =>{
        await axios.post(`https://design-pattern-project.herokuapp.com/brands/dup/${id}`)
        await axios.get('https://design-pattern-project.herokuapp.com/brands')
        .then(res=>{setBrand(res.data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})
    }
    
    const handleDeleteBrand = (id) =>{
        axios.delete(`https://design-pattern-project.herokuapp.com/brands/${id}`)    
        setBrand(brand.filter(item=>item._id !== id)) 
    } 
    const handleDeleteCate = (id) =>{
        axios.delete(`https://design-pattern-project.herokuapp.com/categories/${id}`)
        setCate(cate.filter(item=>item._id !== id))
    } 

    const handleSaveCate = (id) =>{
        axios.put(`https://design-pattern-project.herokuapp.com/categories/${id}`,{
            name:cateName
        })
        .then(res=>alert(res.data))
        .catch(err=>console.log(err))
        const updatedCateIndex = cate.findIndex(item => item._id === id)
        const newData = [...cate]
        const updatedCate = {...cate[updatedCateIndex], name: cateName}
        newData[updatedCateIndex] = updatedCate
        newData.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false}))
        setCate(newData)
    }
    const handleSaveBrand = (id) =>{
        axios.put(`https://design-pattern-project.herokuapp.com/brands/${id}`,{
            name:brandName
        })
        .then(res=>alert(res.data))
        .catch(err=>console.log(err))
        const updatedBrandIndex = brand.findIndex(item => item._id === id)
        const newData = [...brand]
        const updatedBrand = {...brand[updatedBrandIndex], name: brandName}
        newData[updatedBrandIndex] = updatedBrand
        newData.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false}))
        setBrand(newData)
        
    }
    const getCate = () =>{
        return axios.get(`https://design-pattern-project.herokuapp.com/categories`)   
      }
    const getBrands = () =>{
        return axios.get("https://design-pattern-project.herokuapp.com/brands")   
      }
    const AddNewBrand = async () =>{
        await axios.post("https://design-pattern-project.herokuapp.com/brands",{name:newBrand})
        .then(res=>{
            alert(res.data)
            setNewBrand('')
        })
        .catch(err=>console.log(err))       
        await axios.get('https://design-pattern-project.herokuapp.com/brands')
        .then(res=>{setBrand(res.data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})      
    }
    const AddNewCategory = async () =>{
        await axios.post("https://design-pattern-project.herokuapp.com/categories",{name:newCate})
        .then(res=>{
            alert(res.data)
            setNewCate('')
        })
        .catch(err=>console.log(err))
        await axios.get('https://design-pattern-project.herokuapp.com/brands')
        .then(res=>{setBrand(res.data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))})
    }
    useEffect(()=>{
        let mounted = true;
        axios.all([getCate(),getBrands()])
        .then(res=>{
            if(mounted){
                setCate(res[0].data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))
                setBrand(res[1].data.map((item,index)=> Object.defineProperty(item,'id',{value:index+1,writable:false})))
            }
        })
        .catch(err=>console.log(err))
        return () =>{
            mounted = false
        }
    },[])

    const columnsBrand = [
        { field: 'id', headerName: 'STT', width: 90 },
        {
          field: 'name',
          headerName: 'Brand Name',
          width: 200,
          renderCell:(params)=>{
              return(
                  <input type="text" className="inputUpdate" defaultValue={params.row.name} onChange={e=>{setBrandName(e.target.value)}} />
              )
          }
        },
        
        {
            field:"action",
            headerName:"Action",
            
            sortable: false,
            width:200,
            renderCell: (params)=>{
                return(
                    <>
                    <button className="listEdit" onClick={()=>handleSaveBrand(params.row._id)}>Save</button>
                    
                    <DeleteOutline className="listDelete" onClick={()=>handleDeleteBrand(params.row._id)}/>
                    <button className="dupBrand" onClick={()=>CloneBrand(params.row._id)}><FileCopy /> Clone</button> 
                    </>
                )
            }
        }
      ];

    const columnsCate = [
        { field: 'id', headerName: 'STT', width: 90 },
        {
          field: 'name',
          headerName: 'Category name',
          width:200,
          renderCell:(params)=>{
            return(
                <input type="text" className="inputUpdate" defaultValue={params.row.name} onChange={e=>{setCateName(e.target.value)}} />
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
                <div className="brandList">
                    <h2 className="userTitle">Brands</h2>
                    <DataGrid
                    disableSelectionOnClick
                    rows={brand}
                    columns={columnsBrand}
                    pageSize={5}
                    disableSelectionOnClick
                    />
                </div>

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
                    <label>New Brand Name:</label>
                    <input type="text" className="addNew" onChange={(e)=>setNewBrand(e.target.value)} placeholder="Enter Brand Name"/>
                    <button className="addNewButton" onClick={()=>AddNewBrand()} ><Add/></button>
                </div>
                <div className="newItem">
                    <label>New Category Name:</label>
                    <input type="text" className="addNew" onChange={(e)=>setNewCate(e.target.value)} placeholder="Enter Category Name"/>
                    <button className="addNewButton" onClick={()=>AddNewCategory()}><Add/></button>
                </div>
            </div>
        </div>
    )
}
