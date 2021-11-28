import React from "react";
import { useHistory } from "react-router-dom";

export default function CartEmpty() {
  const history = useHistory();
  const navigateTo = () => {
    history.push("/home/product");
  };
  return (
    <div className="cart-empty" style={{ marginTop: "5em" }}>
      <p>NOTHING IN YOUR CART !</p>
      <button
        onClick={navigateTo}
        className="cart-back"
      >{`< BACK TO SHOPPING`}</button>
    </div>
  );
}
