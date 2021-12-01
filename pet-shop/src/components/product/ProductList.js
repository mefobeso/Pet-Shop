import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import Product from "./Product";
import ProductButton from "./ProductButton";
import ProductPage from "./ProductPage";
import "./sass/css/product.css";
export default function ProductList() {
  const params = useParams();
  const title = params.category.toUpperCase();

  const [key, setKey] = useState();
  const [isGrid, setIsGrid] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [filter, setFilter] = useState();

  const viewGrid = () => {
    setIsGrid(true);
  };
  const viewList = () => {
    setIsGrid(false);
  };
  const onIconClick = () => {
    setIsFilter(!isFilter);
  };
  const onFilterSubmit = (filter) => {
    setFilter(filter);
    setKey(Math.random());
  };
  return (
    <>
      <Headerwhite />
      <div className="productlist">
        <h2>{title}</h2>
        <h6>What are you looking for ?</h6>
        <ProductButton
          viewGrid={viewGrid}
          viewList={viewList}
          isGrid={isGrid}
          isFilter={isFilter}
          onIconClick={onIconClick}
          onFilterSubmit={onFilterSubmit}
        ></ProductButton>
        <div
          className={`product-container
           ${isGrid ? " grid" : "list"}`}
        >
          <Product isGrid={isGrid} filterPrice={filter} key={key}></Product>
        </div>
        <ProductPage />
      </div>
      <Footerwhite />
    </>
  );
}
