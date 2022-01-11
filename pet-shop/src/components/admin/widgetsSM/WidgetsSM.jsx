import React,{useState,useEffect} from 'react'
import './widgetssm.css'
import {Visibility} from '@material-ui/icons'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function WidgetsSM() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://petshoptmdt.herokuapp.com/products')
        .then(res=>setProducts(res.data.Products))
    },[])
    const Get2Products = products.splice(1,2)
    
    return (
        <div className="widgetSm">
            <span className="WidgetSmTitle">Products</span>
            <ul className="widgetSmList">
                {products ? Get2Products.map(product =>(
                    <li className="widgetSmListItem">
                        <div className="widgetSmItem">
                            <img src={product.img[0]} alt="" className="widgetSmImg" />
                            <div className="wigdetProduct">
                                <span className="widgetSmProName">{product.name}</span>
                                <span className="widgetSmProPrice">${product.price}</span>
                            </div>
                            
                        </div>
                        <button className="widgetSmButton">
                            <Link to={"/admin/products/" + product._id}>
                            <Visibility className="widgetSmIcon"/>
                            </Link>
                        </button>
                    </li>
                ))
                : ""}
                
                
            </ul>
        </div>
    )
}
