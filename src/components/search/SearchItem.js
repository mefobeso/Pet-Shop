import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartButton from "../UI/CartButton";
import FavoriteButton from "../UI/FavoriteButton";
export default function SearchItem(props) {
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    setAddedProduct(JSON.parse(localStorage.getItem("cart")));
    setFavoriteProduct(JSON.parse(localStorage.getItem("favorite")));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);
  return (
    <div className="search-item">
      <a href={`/product/${props.product._id}`}>
        <img src={props.img} alt="" />
      </a>
      <div className="search-item-info">
        <h5 className="name">
          <a href={`/product/${props.product._id}`}>{props.name}</a>
        </h5>
        <p className="price">${props.price}</p>
        <p style={{ width: "30em" }}>{props.product.description}</p>
        <div className="">
          <FavoriteButton
            className="heart"
            favoriteProduct={favoriteProduct}
            product={props.product}
            setFavoriteProduct={setFavoriteProduct}
          >
            <FontAwesomeIcon icon="heart" />
          </FavoriteButton>
          <CartButton
            className="cart"
            product={props.product}
            addedProduct={addedProduct}
            setAddedProduct={setAddedProduct}
          >
            <FontAwesomeIcon icon="cart-plus" />
          </CartButton>
        </div>
      </div>
    </div>
  );
}
