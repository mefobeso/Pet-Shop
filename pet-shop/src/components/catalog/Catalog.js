import React,{useState} from 'react';
import catalogData from './catalogData';
import './sass/css/catalog.css';
export default function Catalog() {
    const [tabIndex, setTabIndex] = useState(1)
    const tabChange = index =>{
        setTabIndex(index+1)
    }
    return (
        <div className="catalog-container">
            <div className="catalog">
            {catalogData.map((obj,index)=>{
            return (
                <div
                key={obj.id} >
                    <div onClick={()=>tabChange(index)}
                        className={`${tabIndex===index + 1? "catalog-btn-item active":"catalog-btn-item"}`} >
                        <b>{obj.title}</b>
                    </div>                  
                </div>
            ) 
            })}
            </div>    
            {catalogData.map((obj,index)=>{  
                    return (
                        <div className="catalog-wrapper">
                            <div className={`${tabIndex===index+1 ? "catalog-items active":"catalog-items"}`}>
                                {obj.products.map((product,index)=>{
                                return(
                                    <div className="catalog-item" >                           
                                        <img src={product.img} alt="" />
                                        <h1 className="catalog-item-name">{product.name}</h1>
                                        <h2 className="catalog-item-price">{product.price}$</h2>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
