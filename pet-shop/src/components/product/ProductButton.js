import React from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductButton(props) {
  const gridHandler = () => {
    props.viewGrid();
  };
  const listHandler = () => {
    props.viewList();
  };
  const filterHandler = () => {
    props.onFilter();
  };

  return (
    <div className="product-button">
      <div className={`filter ${props.isFilter && "active"}`}>
        <FontAwesomeIcon
          icon="sliders-h"
          className={`${props.isFilter && "active"}`}
          onClick={filterHandler}
        />
        <p>&nbsp;</p>
        <p className={`${props.isFilter && "active"}`}>FILTER</p>
        {props.isFilter && (
          <div className="filter-menu">
            <div className="filter-inner">
              <h5>Price</h5>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$50+</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$30-$49.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$10-$29.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$1-$9.99</p>
              </div>
            </div>
            <div className="filter-inner">
              <h5>Price</h5>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$50+</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$30-$49.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$10-$29.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$1-$9.99</p>
              </div>
            </div>
            <div className="filter-inner">
              <h5>Price</h5>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$50+</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$30-$49.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$10-$29.99</p>
              </div>
              <div>
                <input type="checkbox" name="50+" id="50" />
                <p>$1-$9.99</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <FontAwesomeIcon
          className={`icon ${!props.isGrid && "active"}`}
          icon="bars"
          onClick={listHandler}
          style={{ cursor: "pointer" }}
        />
        <p>&nbsp;</p>
        <FontAwesomeIcon
          className={`icon ${props.isGrid && "active"}`}
          icon="border-all"
          onClick={gridHandler}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <p>BEST SELLER</p>
        <p>&nbsp;</p>
        <FontAwesomeIcon icon="chevron-down" />
      </div>
    </div>
  );
}
