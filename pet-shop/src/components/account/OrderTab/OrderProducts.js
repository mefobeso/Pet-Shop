import React from "react";

export default function OrderProducts(props) {
  return (
    <div className="profile-content-order-products" onClick={props.onClick}>
      {props.dataProduct.slice(0, 3).map((product, index) => {
        return (
          <div className="profile-content-order-product" key={index}>
            {/* data here */}
            <img src={product.img}></img>
            <div className="info">
              <div className="info-vertical">
                <p>{product.name}</p>
                <p className="price">${product.price}</p>
              </div>
              <p className="quantity">x{product.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
