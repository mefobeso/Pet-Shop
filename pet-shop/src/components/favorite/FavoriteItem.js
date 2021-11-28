import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FavoriteItem(props) {
  const product = props.product;
  const deleteItem = () => {
    props.onDeleteHandler(product.id);
  };
  return (
    <div className="favorite-item">
      <img src={product.img} alt="" className="" />
      <div className="favorite-item-info">
        <h5 className="favorite-item-name">{product.name}</h5>
        <h5>${product.price}</h5>
        <FontAwesomeIcon
          icon="trash"
          style={{ marginLeft: "50px", cursor: "pointer" }}
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}
