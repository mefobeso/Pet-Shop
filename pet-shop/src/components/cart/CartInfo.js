import React from "react";

export default function CartInfo(props) {
  const sum = (items, amount, price) => {
    return items.reduce((a, b) => {
      return a + b[amount] * b[price];
    }, 0);
  };
  const cost = sum(props.cart, "amount", "price");
  return (
    <div className="cart-info">
      <h4 style={{ color: "rgb(180, 180, 180)" }}>Total Cost</h4>
      <h4 style={{fontWeight:"bold"}}>${cost}</h4>
      <h6 style={{ color: "rgb(180, 180, 180)" }}>Have a promo code ?</h6>
      <input
        type="text"
        style={{ display: "block" }}
        placeholder="Enter your promo here !"
      />
      <hr />
    </div>
  );
}
