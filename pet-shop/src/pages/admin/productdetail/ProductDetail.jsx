import React,{ useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "./productdetail.css"

export default function ProductDetail() {
    const {id} = useParams()
    const [product,setProduct]= useState({});
    const [brand,setBrand]= useState([]);
    const [proName, setProName] = useState()
    const [proPrice, setProPrice] = useState()
    const [proStock, setProStock] = useState()
    const [proDes, setProDes] = useState()
    const getProduct = () =>{
        return axios.get(`https://design-pattern-project.herokuapp.com/products/${id}`)   
      }
    const getBrands = () =>{
        return axios.get("https://design-pattern-project.herokuapp.com/brands")   
      }
      const getProductBrand = (id) =>{
       return brand.find(item => item._id === id)
      }
    useEffect(()=>{
        axios.all([getProduct(),getBrands()])
        .then(res=>{
            setProduct(res[0].data)
            setBrand(res[1].data)
        })
        .catch(err=>console.log(err))
    },[])

    const handleUpdate = () =>{
        
        axios.put(`https://design-pattern-project.herokuapp.com/products/${id}`,{
            name:proName,
            price:proPrice,
            quantity:proStock,
            description:proDes,
        })
        .then(res=>alert(res.data))
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
                    <img  src={product.image && product.image[0]} className="productInforImg" alt="" />
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
                        <span className="inforValue">{product.category_id ? product.category_id.name : ""}</span>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Brand:</span>
                        <span className="inforValue">{brand.length!==0 ? getProductBrand(product.brand_id).name: "brand"}</span>
                    </div>
                    <div className="productInforItem">
                        <span className="inforKey">Images:</span>
                        {product.image && product.image.map((single,key)=>{
                            return(
                                <img key={key} src={single} alt="" className="detailImg"/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <div className="productFor">
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
