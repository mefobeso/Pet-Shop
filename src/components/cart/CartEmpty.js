import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CartEmpty() {
  const history = useHistory();
  const navigateTo = () => {
    history.push("/home/product/page=1");
  };
  return (
    <div className="cart-empty" style={{ marginTop: "5em" }}>
      <p>NOTHING IN YOUR CART !</p>
      <button
        onClick={navigateTo}
        className="cart-back"
        style={{ fontWeight: "bold" }}
      >
        <FontAwesomeIcon icon="chevron-left" />
        {` BACK TO SHOPPING`}
      </button>
    </div>
  );
}
