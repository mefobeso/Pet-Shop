import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import FavoriteItem from "./FavoriteItem";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
// css
import "./sass/css/favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <h6 style={{ color: "#ddd" }}>
          {favoriteProduct === null || favoriteProduct.length === 0
            ? "0"
            : favoriteProduct.length}{" "}
          items
        </h6>
        <hr />
        <div className="favorite-items">
          {favoriteProduct === null || favoriteProduct.length === 0 ? (
            <div style={{ marginTop: "5em" }}>
              <p>NOTHING HERE</p>
              <button onClick={navigateTo} className="favorite-back">
                <FontAwesomeIcon icon="chevron-left" />
                {` BACK TO SHOPPING`}
              </button>
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
        
        {favoriteProduct.length === 0 ? (
          <div></div>
        ) : (
          <>
          <hr />
          <div className="favorite-navigate">
            
            <button onClick={navigateTo}>
              {" "}
              <FontAwesomeIcon icon="chevron-left" />
              {` BACK TO SHOPPING`}
            </button>
          </div>
          </>
        )}
      </div>
      <Footerwhite />
    </>
  );
}
