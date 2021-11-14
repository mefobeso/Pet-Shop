import React from "react";

export default function OrderProducts(props) {
  console.log(props);
  return (
    <div className="profile-content-order-products">
      {props.dataProduct.slice(0, 3).map((product, index) => {
        return (
          <div className="profile-content-order-product">
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
