import React from "react";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import Product from "./Product";
import ProductButton from "./ProductButton";
import ProductPage from "./ProductPage";
import "./sass/css/product.css";
export default function ProductList() {
  return (
    <>
      <Headerwhite />
      <div className="productlist">
        <h2>PRODUCT</h2>
        <h6>What are you looking for ?</h6>
        <ProductButton></ProductButton>
        <div className="product-container">
          <Product></Product>
        </div>
        <ProductPage />
      </div>
      <Footerwhite />
    </>
  );
}
