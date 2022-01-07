import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import "./newproduct.css"
import axios from 'axios'

export default function NewProduct() {
    const history = useHistory()
    const [cates, setCates] = useState([])
  const [brands, setBrands] = useState([])
  const [proName, setProName] = useState()
  const [proPrice, setProPrice] = useState()
  const [proStock, setProStock] = useState()
  const [proCate, setProCate] = useState()
  const [proBrand, setProBrand] = useState()
  const [proDes, setProDes] = useState()
  const [proImgs, setProImgs] = useState()
  const [proImg1, setProImg1] = useState()
  const [proImg2, setProImg2] = useState()
  const getCategorys = () =>{
    return axios.get("https://design-pattern-project.herokuapp.com/categories")   
  }
  const getBrands = () => {
   return axios.get("https://design-pattern-project.herokuapp.com/brands")  
  }
  useEffect(() =>(
   
    axios.all([getCategorys(),getBrands()])
    .then((result) =>{
      setCates(result[0].data);
      setBrands(result[1].data);
    })
    
    ),[])

    const handleCreate = () =>{
        axios.post('https://design-pattern-project.herokuapp.com/products',{
            name:proName,
            price:proPrice,
            quantity:proStock,
            category_id :{
                _id:proCate,
                name:cates.find(item=>item._id===proCate).name
            },
            brand_id:proBrand,
            description:proDes,
            image:[proImgs,proImg1,proImg2]
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
                    <label>Brand</label>
                    <select name="role" id="role"  onChange={e=>setProBrand(e.target.value)} className="newProductSelectRole">
                        {brands && brands.map((brand,index)=>{
                            return(
                                <option key={index} value={brand._id}>{brand.name}</option>
                            )
                        })}
                    </select>
                </div>
                
                <div className="newProductItem">
                <label>Images</label>
                    Img1<input required type="text"  onChange={e=>setProImgs(e.target.value)}  />
                    Img2<input  type="text"  onChange={e=>setProImg1(e.target.value)}  />
                    Img3<input  type="text"  onChange={e=>setProImg2(e.target.value)}  />
                </div>
                <div className="newProductItem">
                    <label>Description</label>
                    <textarea type="number" onChange={e=>setProDes(e.target.value)} placeholder="Enter description" />
                </div>
                <div className="newProductItem">
                <label>Category</label>
                    <select name="role" id="role" onChange={e=>setProCate(e.target.value)} className="newProductSelectRole">
                        {cates && cates.map((cate,index)=>{
                            return(
                                <option key={index} value={cate._id}>{cate.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button className="submitNewProduct" onClick={()=>handleCreate()}>Create</button>
            </div>
        </div>
    )
}
