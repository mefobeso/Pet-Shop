import React from "react";

export default function CartInfo(props) {
  return (
    <>
      <h3>Total Cost</h3>
      <h4>${props.totalPrice}</h4>
      <h6>Have a promo code ?</h6>
      <input
        type="text"
        style={{ display: "block" }}
        placeholder="Enter your promo here !"
      />
    </>
  );
}
