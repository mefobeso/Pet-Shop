import React from "react";
import dataCate from "../../database/category.data";
export default function Category() {
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
