import React from "react";
import { Link } from "react-router-dom";
import dataCate from "../../database/category.data";
export default function Category(props) {
  return (
    <>
      {dataCate.map((cate, index) => {
        const Background = cate.thumbnail;
        return (
          <a href={`/home/product/${cate.name.toLowerCase()}`}
            className="category"
            key={index}
            style={{ backgroundImage: `url(${Background})` }}
          >
            {" "}
            <a href={`/home/product/${cate.name.toLowerCase()}`}>{cate.name}</a>
          </a>
        );
      })}
    </>
  );
}
