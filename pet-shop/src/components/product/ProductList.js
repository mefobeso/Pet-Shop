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

  const [isGrid, setIsGrid] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  const viewGrid = () => {
    setIsGrid(true);
  };
  const viewList = () => {
    setIsGrid(false);
  };
  const onFilter = () => {
    setIsFilter(!isFilter);
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
          onFilter={onFilter}
        ></ProductButton>
        {/* <div
          className={`product-container
           ${isGrid ? " grid" : "list"}`}
        >
          <Product isGrid={isGrid}></Product>
        </div>
        <ProductPage /> */}
      </div>
      {/* <Footerwhite /> */}
    </>
  );
}
