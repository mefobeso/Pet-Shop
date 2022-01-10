import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import "./newproduct.css"
import axios from 'axios'

export default function NewProduct() {
    const history = useHistory()
    const [cates, setCates] = useState([])
  const [proName, setProName] = useState()
  const [proPrice, setProPrice] = useState()
  const [proStock, setProStock] = useState()
  const [proCate, setProCate] = useState()
  const [proDes, setProDes] = useState()
  const [proImgs, setProImgs] = useState()
  const [proImg1, setProImg1] = useState()
  const [proImg2, setProImg2] = useState()
  
 
  useEffect(() =>(
    axios.get("https://petshoptmdt.herokuapp.com/category")
    .then(res=>setCates(res.data.cates))
    ),[])

    const handleCreate = () =>{
        axios.post('https://petshoptmdt.herokuapp.com/products',{
            name:proName,
            price:proPrice,
            quantity:proStock,
            cate_id :proCate,
            description:proDes,
            img:[proImgs,proImg1,proImg2]
        }).then(res=>alert(res.data))
    }
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">NEW PRODUCT</h1>
            <div className="newProductForm">
                
                <div className="newProductItem">
                    <label>Product Name</label>
                    <input required type="text" onChange={e=>setProName(e.target.value)} placeholder="Enter Product Name"  />
                </div>
                <div className="newProductItem">
                    <label>Price</label>
                    <input required type="number" onChange={e=>setProPrice(e.target.value)} placeholder="Enter price"  />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input required type="number" onChange={e=>setProStock(e.target.value)} placeholder="Enter stock"  />
                </div>
                <div className="newProductItem">
                <label>Category</label>
                    <select name="role" id="role" onChange={e=>setProCate(e.target.value)} className="newProductSelectRole">
                        {cates && cates.map((cate,index)=>{
                            return(
                                <option key={index} value={cate._id}>{cate.cateName}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="newProductItem">
                <label>Images</label>
                    Image 1<input required type="text"  placeholder="Enter URL Image" onChange={e=>setProImgs(e.target.value)}  />
                    Image 2<input  type="text"  placeholder="Enter URL Image" onChange={e=>setProImg1(e.target.value)}  />
                    Image 3<input  type="text"  placeholder="Enter URL Image" onChange={e=>setProImg2(e.target.value)}  />
                </div>
                <div className="newProductItem">
                    <label>Description</label>
                    <textarea type="number" onChange={e=>setProDes(e.target.value)} cols="10" rows="9" placeholder="Enter description" />
                </div>
                
                <button className="submitNewProduct" onClick={()=>handleCreate()}>Create</button>
            </div>
        </div>
    )
}
