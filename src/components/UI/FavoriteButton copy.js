import React from "react";
import classes from "./FavoriteButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FavoriteButton(props) {
  const favoriteProduct = props.favoriteProduct;
  const product = props.product;
  const setFavoriteProduct = props.setFavoriteProduct;
  const favoriteItemHandler = () => {
    setFavoriteProduct((prevProductList) => {
      if (favoriteProduct != null) {
        const duplicate = favoriteProduct.find((p) => p.id === product._id);
        if (duplicate) {
          console.log("dup");
          return prevProductList;
        }
      }
      return [
        ...prevProductList,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          img: product.img,
        },
      ];
    });
  };
  return (
    <button onClick={favoriteItemHandler} className={classes.favorite}>
      <FontAwesomeIcon icon="heart" />
    </button>
  );
}
