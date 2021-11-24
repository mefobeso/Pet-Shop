import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartQuantity from "./CartQuantity";

export default function CartItem(props) {
  const product = props.product;
  const deleteItem = () => {
    props.onDeleteHandler(product.id);
  };
  console.log(product);
  console.log(props.addedProduct);
  // return (
  //   <div>

  //     {/* {props.addedProduct.name === null ? (
  //       <div>adsas</div>
  //     ) : (
  //       props.addedProduct.map((product, index) => {
  //

  //         );
  //       })
  //     )} */}
  //   </div>
  return (
    <div className="cart-item">
      <img src={product.img} alt="" className="" />
      <div className="cart-item-info">
        <h5 className="cart-item-name">{product.name}</h5>
        <CartQuantity maxQuantity={product.quantity} />
        <h5>${product.price}</h5>
        <button onClick={deleteItem}>
          <FontAwesomeIcon icon="trash" style={{ marginLeft: "50px" }} />
        </button>
      </div>
    </div>
  );
}
