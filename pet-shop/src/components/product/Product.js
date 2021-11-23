import React from "react";
import dataProducts from "../../database/product.data";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Product() {
  return (
    <>
      {dataProducts.map((product, index) => {
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
                <button>
                  <FontAwesomeIcon
                    icon="cart-plus"
                    className="icon"
                    style={{ color: "green" }}
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
