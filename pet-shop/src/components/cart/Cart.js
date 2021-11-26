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
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    setCartProduct(cart);
  }, []);
  const onDeleteHandler = (id) => {
    setCartProduct((prevList) => {
      const updatedList = prevList.filter((product) => product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedList));
      return updatedList;
    });
    console.log(cartProduct);
  };
  return (
    <>
      <Headerwhite />
      <div className="cart-container">
        <h2>SHOPPING CART</h2>
        <h6 style={{ color: "#ddd", marginBottom: "50px" }}>
          {cartProduct.length === 0 ? "0" : cartProduct.length} items in your
          cart
        </h6>
        <div className="cart-body">
          <div className="cart-list">
            <CartInfo totalPrice={+59.15} />
            <br />
            <CartSimilar />
          </div>
          <div className="card-items">
            {cartProduct.length === 0 ? (
              <a href="/home/product">Back to Shopping</a>
            ) : (
              cartProduct.map((product, index) => {
                return (
                  <CartItem
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
