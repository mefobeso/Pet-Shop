import React, { useState, useEffect } from "react";
import FavoriteItem from "./FavoriteItem";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import { useHistory } from "react-router-dom";
import "./sass/css/favorite.css";
export default function Favorite(props) {
  const favorite = JSON.parse(localStorage.getItem("favorite"));
  const [favoriteProduct, setFavoriteProduct] = useState([{}]);
  const history = useHistory();
  const navigateTo = () => {
    history.push("/home/product");
  };

  useEffect(() => {
    setFavoriteProduct(favorite);
  }, []);

  const onDeleteHandler = (id) => {
    setFavoriteProduct((prevList) => {
      const updatedList = prevList.filter((product) => product.id !== id);
      localStorage.setItem("favorite", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <>
      <Headerwhite />
      <div className="favorite-container">
        <h2>FAVORITE LIST</h2>
        <h6 style={{ color: "#ddd"}}>
          {favoriteProduct === null || favoriteProduct.length
            ? "0"
            : favoriteProduct.length}{" "}
          items
        </h6>
        <hr/>
        <div className="favorite-items">
          {favoriteProduct === null || favoriteProduct.length === 0 ? (
            <div style={{marginTop:"10em"}}>
              <p>NOTHING HERE</p>
              <button
                onClick={navigateTo}
                className="favorite-back"
              >{`< BACK TO SHOPPING`}</button>
            </div>
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
