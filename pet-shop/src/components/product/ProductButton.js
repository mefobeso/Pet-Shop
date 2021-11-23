import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductButton() {
  return (
    <div className="product-button">
      <div className="">
        <FontAwesomeIcon icon="sliders-h" />
        <p>&nbsp;</p>
        <p>FILTER</p>
      </div>

      <div>
        <FontAwesomeIcon icon="bars" />
        <p>&nbsp;</p>
        <FontAwesomeIcon icon="border-all" />
      </div>
      <div>
        <p>BEST SELLER</p>
        <p>&nbsp;</p>
        <FontAwesomeIcon icon="chevron-down" />
      </div>
    </div>
  );
}
