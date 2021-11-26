import React, { useState, useEffect } from "react";
import FavoriteItem from "./FavoriteItem";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import "./sass/css/favorite.css";
export default function Favorite(props) {
  const favorite = JSON.parse(localStorage.getItem("favorite"));
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    setFavoriteProduct(favorite);
  }, []);
  const onDeleteHandler = (id) => {
    setFavoriteProduct((prevList) => {
      const updatedList = prevList.filter((product) => product.id !== id);
      localStorage.setItem("favorite", JSON.stringify(updatedList));
      return updatedList;
    });
    console.log(favoriteProduct);
  };
  return (
    <>
      <Headerwhite />
      <div className="favorite-container">
        <h2>FAVORITE LIST</h2>
        <h6 style={{ color: "#ddd", marginBottom: "50px" }}>
          {favoriteProduct.length === 0 ? "0" : favoriteProduct.length} items
        </h6>
        <div className="favorite-items">
          {favoriteProduct === null ? (
            <div>Nothing here</div>
          ) : (
            favoriteProduct.map((product, index) => {
              return (
                <FavoriteItem
                  favoriteList={favoriteProduct}
                  onDeleteHandler={onDeleteHandler}
                  product={product}
                />
              );
            })
          )}
        </div>
      </div>
      <Footerwhite />
    </>
  );
}
