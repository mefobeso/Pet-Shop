import React, { useEffect, useState } from "react";
import dataProducts from "../../database/product.data";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Product() {
  const [addedProduct, setAddedProduct] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
  }, [addedProduct]);
  return (
    <>
      {dataProducts.map((product, index) => {
        const addItemHandler = () => {
          setAddedProduct((prevProductList) => {
            return [
              ...prevProductList,
              {
                
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                img: product.img,
              },
            ];
          });
          // document.cookie = `name=${product.name}`;
          // document.cookie = `price=${product.price}`;
          // document.cookie = `img=${product.img}`;
          // document.cookie = `quantity=${product.quantity}`;
          // console.log(document.cookie);
        };
        return (
          <div className="product" key={index}>
            <img src={product.img} alt="" />
            <div className="product-info">
              <div className="">
                <h5>{product.name}</h5>
                <p style={{ fontWeight: "600" }}>${product.price}</p>
              </div>
              <div>
                <button>
                  <FontAwesomeIcon
                    icon="heart"
                    className="icon"
                    style={{ color: "red" }}
                  />
                </button>
                &nbsp;
                <button onClick={addItemHandler}>
                  <FontAwesomeIcon icon="cart-plus" className="icon" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
