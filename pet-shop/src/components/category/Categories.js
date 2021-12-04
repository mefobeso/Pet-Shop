import React, { useState } from "react";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import Category from "./Category";
import "./sass/css/category.css";
export default function Categories() {
  return (
    <>
      <Headerwhite />
      <div className="categories">
        <h2>CATEGORY</h2>
        <h6>What are you looking for ?</h6>
        <div className="category-container">
          <Category></Category>
        </div>
      </div>
      <Footerwhite />
    </>
  );
}
