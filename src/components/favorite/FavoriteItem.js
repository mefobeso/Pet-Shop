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
      <img src={product.img} alt={product.id} className="" />
      <div className="favorite-item-info">
        <div className="" style={{ display: "flex",width:"100%",justifyContent:"space-between" }}>
          <h5 className="favorite-item-name">{product.name}</h5>
          <button onClick={deleteItem}>
            <FontAwesomeIcon icon="trash" />
          </button>
        </div>
        <div className="" style={{ width: "6em" }}>
          <h5>${product.price}</h5>
          <button>Add to Cart <FontAwesomeIcon icon="cart-plus"/></button>
        </div>
      </div>
    </div>
  );
}
