import React, { useState, useEffect } from "react";

export default function CartInfo(props) {
  const sum = (items, amount, price) => {
    return items.reduce((a, b) => {
      return a + b[amount] * b[price];
    }, 0);
  };
  const cost = sum(props.cart, "amount", "price");
  return (
    <div className="cart-info">
      <h4>Total Cost</h4>
      <h4>${cost}</h4>
      <h6>Have a promo code ?</h6>
      <input
        type="text"
        style={{ display: "block" }}
        placeholder="Enter your promo here !"
      />
      <hr />
    </div>
  );
}
