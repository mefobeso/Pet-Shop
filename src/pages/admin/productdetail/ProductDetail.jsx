import React,{ useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "./productdetail.css"

export default function ProductDetail() {
    const {id} = useParams()
    const [product,setProduct]= useState({});
    const [cate,setCate]= useState([]);
    const [proName, setProName] = useState()
    const [proPrice, setProPrice] = useState()
    const [proStock, setProStock] = useState()
    const [proDes, setProDes] = useState()
    const getProduct = () =>{
        return axios.get(`https://petshoptmdt.herokuapp.com/products/${id}`)   
      }
    const getCates = () =>{
        return axios.get("https://petshoptmdt.herokuapp.com/category")   
      }
      const getProductCate = (id) =>{
       return cate.find(item => item._id === id)
      }
    useEffect(()=>{
        axios.all([getProduct(),getCates()])
        .then(res=>{
            setProduct(res[0].data)
            setCate(res[1].data.cates)
        })
        .catch(err=>console.log(err))
    },[])

    const handleUpdate = () =>{
        
        axios.put(`https://petshoptmdt.herokuapp.com/products/${id}`,{
            name:proName,
            price:proPrice,
            quantity:proStock,
            description:proDes,
        })
        .then(res=>alert(res.data.message))
    }

    return (
        <div className="productDetail">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product Detail</h1>
                <Link to="/admin/newproduct/">
                    <button className="addButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productInforTop">
                    <img  src={product.img && product.img[0]} className="productInforImg" alt="" />
                    <span className="productName">{product.name}</span>
                </div>
                <div className="productInforBottom">
                    <h3 className="informations">Informations</h3>
                    <div className="productInforItem">
                        <span className="inforKey">Price</span>
                        <span className="inforValue">€{product.price}</span>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Stocks:</span>
                        <span className="inforValue">{product.quantity ? product.quantity : "Out of stocks"}</span>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Description:</span>
                        <p className="inforValue">{product.description}</p>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Category:</span>
                        <span className="inforValue">{cate.length!==0 ? getProductCate(product.cate_id).cateName: "category"}</span>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Images:</span>
                        {product.img && product.img.map((single,key)=>{
                            return(
                                <img key={key} src={single} alt="" className="detailImg"/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <div className="productForm">
                    <div className="formLeft">
                            <label className="productlabel">Product Name</label>
                            <input type="text" className="productInput" onChange={e=>setProName(e.target.value)} placeholder={product.name} />
                            <label className="productlabel">Product Price</label>
                            <input type="number" className="productInput" onChange={e=>setProPrice(e.target.value)} placeholder={product.price} />
                            <label className="productlabel">Stocks</label>
                            <input type="number" className="productInput" onChange={e=>setProStock(e.target.value)} placeholder={product.quantity} />
                            <label className="productlabel">Description</label>
                            <textarea rows="3" className="productInput" onChange={e=>setProDes(e.target.value)} placeholder={product.description} /> 
                    </div>
                    <button className="submitUpdate" onClick={()=>handleUpdate()}>Update</button>
                </div>
            </div>
        </div>
    )
}
