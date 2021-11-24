import React from "react";
import dataProducts from "../../database/product.data";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartSimilar() {
  return (
    <div>
      <h6>Looking for something ?</h6>
      {dataProducts.slice(0, 3).map((product, index) => {
        return (
          <div key={index} className="cart-similar">
            <img src={product.img} alt="" className="" />
            <div className="cart-similar-info">
              <h6>{product.name}</h6>
              <div style={{ display: "flex" }}>
                <h6>${product.price}</h6>
                <FontAwesomeIcon
                  icon="cart-plus"
                  style={{ fontSize: "12px", marginLeft: "12px" }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
