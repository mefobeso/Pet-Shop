import React, { useState } from "react";
import "./sass/css/catalog.css";
import CatalogItem from "./CatalogItem";
import CatalogTab from "./CatalogTab";
export default function Catalog(props) {
  const [tabIndex, setTabIndex] = useState(1);
  const tabChange = (index) => {
    setTabIndex(index + 1);
  };
  return (
    <div className="catalog-container">
      <CatalogTab tabIndex={tabIndex} tabChange={tabChange} />
      <CatalogItem tabIndex={tabIndex} data={props.data}/>
    </div>
  );
}
