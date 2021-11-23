import React from "react";
import dataCate from "../../database/category.data";
export default function Category() {
  return (
    <>
      {dataCate.map((cate, index) => {
        const Background = cate.thumbnail;
        return (
          <div
            className="category"
            key={index}
            style={{ backgroundImage: `url(${Background})` }}
          >
            <p>{cate.name}</p>
          </div>
        );
      })}
    </>
  );
}
