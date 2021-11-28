import React, { useState, useEffect } from "react";
import Footerwhite from "../layouts/Footer_white";
import Headerwhite from "../layouts/Header_white";
import CartInfo from "./CartInfo";
import CartItem from "./CartItem";
import CartSimilar from "./CartSimilar";

import "./sass/css/cart.css";
import CartEmpty from "./CartEmpty";
import { set } from "js-cookie";
export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [cartProduct, setCartProduct] = useState([]);
  const [key, setKey] = useState();

  useEffect(() => {
    setCartProduct(cart);
  }, []);

  const randomKey = () => {
    setKey(Math.random());
  };
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
        <h6 style={{ color: "#ddd" }}>
          {cartProduct.length === 0 ? "0" : cartProduct.length} items in your
          cart
        </h6>
        <hr />
        <div className="cart-body">
          <div className="cart-list">
            <CartInfo cart={cartProduct} key={key} />
            <br />
            <CartSimilar />
          </div>
          <div className="card-items">
            {cartProduct.length === 0 ? (
              <CartEmpty />
            ) : (
              cartProduct.map((product, index) => {
                const onAmountChange = (value) => {
                  setCartProduct(() => {
                    const duplicate = cartProduct.find(
                      (p) => p.id === product.id
                    );
                    if (duplicate) {
                      const index = cartProduct.findIndex(
                        (p) => p.id === product.id
                      );
                      cartProduct[index].amount = value;
                      localStorage.setItem("cart", JSON.stringify(cartProduct));
                      randomKey();
                      return cartProduct;
                    }
                  });
                };

                return (
                  <CartItem
                    onDeleteHandler={onDeleteHandler}
                    product={product}
                    onAmountChange={onAmountChange}
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
