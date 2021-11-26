import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FavoriteItem(props) {
  const product = props.product;
  const deleteItem = () => {
    props.onDeleteHandler(product.id);
  };
  return (
    <div className="cart-item">
      <img src={product.img} alt="" className="" />
      <div className="cart-item-info">
        <h5 className="cart-item-name">{product.name}</h5>
        <h5>${product.price}</h5>
        {/* <button onClick={deleteItem}> */}
        <FontAwesomeIcon
          icon="trash"
          style={{ marginLeft: "50px", cursor: "pointer" }}
          onClick={deleteItem}
        />
        {/* </button> */}
      </div>
    </div>
  );
}
