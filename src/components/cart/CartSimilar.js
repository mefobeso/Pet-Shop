import React from "react";
import { products } from "../../database/product.data";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartSimilar() {
  return (
    <div style={{ width: "20em" }}>
      <h6 style={{ marginTop: "-2em", color: "rgb(180,180,180)" }}>
        Looking for something ?
      </h6>
      {products.slice(0, 3).map((product, index) => {
        return (
          <div key={Math.random(10,20)} className="cart-similar">
            <img src={product.img[0]} alt="" className="" />
            <div className="cart-similar-info">
              <h6 style={{ fontWeight: "bold" }}>{product.name}</h6>
              <div style={{ display: "flex" }}>
                <h6>${product.price}</h6>
                <FontAwesomeIcon
                  icon="cart-plus"
                  style={{ marginLeft: "1em", cursor: "pointer" }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
