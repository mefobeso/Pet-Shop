import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import catalogData from "../../../database/catalog.data";
import CartButton from "../..//UI/CartButton";

import FavoriteButton from "../../UI/FavoriteButton";
import "./sass/css/catalog.css";
export default function CatalogItem(props) {
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);
  const data = props.data;
  console.log(data);
  return (
    <div>
      {catalogData.slice(0, 8).map((obj, index) => {
        return (
          <div className="catalog-wrapper">
            <div
              className={`${
                props.tabIndex === index + 1
                  ? "catalog-items active"
                  : "catalog-items"
              }`}
            >
              {data.slice(0, 8).map((product, index) => {
                return (
                  <Link to={`/product/${product._id}`}>
                    <div className="catalog-item">
                      <img src={product.img[0]} alt="" />
                      {/* Data here */}
                      <h1 className="catalog-item-name">{product.name}</h1>
                      <h2 className="catalog-item-price">{product.price}$</h2>
                      <div>
                        <FavoriteButton
                          favoriteProduct={favoriteProduct}
                          product={product}
                          setFavoriteProduct={setFavoriteProduct}
                        />
                        &nbsp;
                        <CartButton
                          addedProduct={addedProduct}
                          product={product}
                          setAddedProduct={setAddedProduct}
                        />
                      </div>
                    </div>
                  </Link>
                  
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
