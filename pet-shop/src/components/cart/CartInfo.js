import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function CartInfo(props) {
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    props.cart.map((product) => {
      setTotalCost(totalCost + product.amount * product.price);
    });
  }, [props.cart]);
  return (
    <div className="cart-info">
      <h4>Total Cost</h4>
      <h4>${totalCost}</h4>
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
