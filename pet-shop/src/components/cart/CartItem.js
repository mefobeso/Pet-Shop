import React, { useState, useEffect } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartQuantity from "./CartQuantity";

export default function CartItem(props) {
  const product = props.product;

  const deleteItem = () => {
    props.onDeleteHandler(product.id);
    
  };

  return (
    <div className="cart-item" key={props.id}>
      <img src={product.img} alt="" className="" />
      <div className="cart-item-info">
        <h5 className="cart-item-name">{product.name}</h5>
        <CartQuantity
          maxQuantity={product.quantity}
          price={product.price}
          amount={product.amount}
          id={product.id}
          onAmountChange={props.onAmountChange}
        />
        <h5>${product.price}</h5>
        <FontAwesomeIcon
          icon="trash"
          style={{ cursor: "pointer" }}
          onClick={deleteItem}
          
        />
      </div>
    </div>
  );
}
