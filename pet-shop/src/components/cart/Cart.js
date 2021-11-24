import React, { useState, useEffect } from "react";
import Footerwhite from "../layouts/Footer_white";
import Headerwhite from "../layouts/Header_white";
import CartInfo from "./CartInfo";
import CartItem from "./CartItem";
import CartSimilar from "./CartSimilar";
import Cookies from "js-cookie";
import "./sass/css/cart.css";
export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [addedProduct, setAddedProduct] = useState([]);
  useEffect(() => {
    setAddedProduct(cart);
  }, []);
  const onDeleteHandler = (id) => {
    setAddedProduct((prevList) => {
      const updatedList = prevList.filter((product) => product.id !== id);
      return updatedList;
    });
  };
  return (
    <>
      <Headerwhite />
      <div className="cart-container">
        <h2>SHOPPING CART</h2>
        <h6 style={{ color: "#ddd", marginBottom: "50px" }}>
          {addedProduct === null ? "0" : addedProduct.length} items in your cart
        </h6>
        <div className="cart-body">
          <div className="cart-list">
            <CartInfo totalPrice={+59.15} />
            <br />
            <CartSimilar />
          </div>
          <div className="card-items">
            {addedProduct === null ? (
              <div>Nothing here</div>
            ) : (
              addedProduct.map((product, index) => {
                return (
                  <CartItem
                    addedProduct={addedProduct}
                    onDeleteHandler={onDeleteHandler}
                    product={product}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footerwhite />
    </>
  );
}
