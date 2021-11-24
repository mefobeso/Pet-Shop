import React from "react";
import catalogData from "../../../database/catalog.data";
import "./sass/css/catalog.css";
export default function CatalogItem(props) {
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
              {obj.products.slice(0, 8).map((product, index) => {
                return (
                  <div className="catalog-item">
                    <img src={product.img} alt="" />
                    {/* Data here */}
                    <h1 className="catalog-item-name">{product.name}</h1>
                    <h2 className="catalog-item-price">{product.price}$</h2>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
