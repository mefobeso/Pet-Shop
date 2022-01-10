import React from "react";
import catalogData from "../../../database/catalog.data";
import "./sass/css/catalog.css";

export default function CatalogTab(props) {
  const tabHandler = (index) => {
    props.tabChange(index);
  };
  return (
    <div className="catalog">
      {catalogData.slice(0, 8).map((obj, index) => {
        return (
          <div key={obj.id}>
            <div
              onClick={() => tabHandler(index)}
              className={`${
                props.tabIndex === index + 1
                  ? "catalog-btn-item active"
                  : "catalog-btn-item"
              }`}
            >
              <b>{obj.title}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}
