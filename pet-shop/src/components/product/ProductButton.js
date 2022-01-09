import React, { useState, useEffect } from "react";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toInteger } from "lodash";
import axios from "axios";
export default function ProductButton(props) {
  const timeout = 10000;
  const [dataCate, setDataCate] = useState([]);
  const [filterPrice, setFilterPrice] = useState({});
  const [filterCate, setFilterCate] = useState({});
  const [isSorting, setIsSorting] = useState(false);
  const [sortSelected, setSortSelected] = useState({
    key: "default",
    value: "SORT BY",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  // View function
  const gridHandler = () => {
    props.viewGrid();
  };
  const listHandler = () => {
    props.viewList();
  };

  // Filter Handler
  const filterHandler = () => {
    props.onIconClick();
  };
  const onReset = () => {
    props.onFilterSubmit(50);
    props.onIconClick();
  };
  const onFilterChange = (e) => {
    const checkedValue = toInteger(e.target.value);
    setFilterPrice(checkedValue);
  };
  const onCateChange = (e) => {
    const cateValue = e.target.value;
    setFilterCate(cateValue);
  };

  // Filter Submit
  const onSubmit = (e) => {
    e.preventDefault();
    props.onFilterSubmit(filterPrice, filterCate);
    props.onIconClick();
  };
  // Sort Handler
  const onSortClick = () => {
    setIsSorting(!isSorting);
  };
  const azHandler = () => {
    setSortSelected({ key: "az", value: "A-Z" });
    setIsSorting(!isSorting);
  };
  const lowToHight = () => {
    setSortSelected({ key: "low", value: "Low to High" });
    setIsSorting(!isSorting);
  };
  const highToLow = () => {
    setSortSelected({ key: "high", value: "High to Low" });
    setIsSorting(!isSorting);
  };

  useEffect(() => {
    props.onSortSelected(sortSelected.key);
  }, [sortSelected.key]);

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://petshoptmdt.herokuapp.com/category", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          setDataCate(a.data.cates);
          setLoading(false);
        }
      })
      .catch(function (e) {
        if (!unmounted) {
          setError(true);
          setErrorMessage(e.message);
          setLoading(false);
          if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
          } else {
            console.log("another error happened:" + e.message);
          }
        }
      });

    return () => {
      unmounted = true;
      source.cancel("Cancelling");
    };
  }, [timeout]);

  return (
    <div className="product-button">
      <div className={`filter icon ${props.isFilter ? "active" : ""} `}>
        <FontAwesomeIcon
          icon="sliders-h"
          className={`${props.isFilter ? "active" : ""}`}
          onClick={filterHandler}
        />
        <p>&nbsp;</p>
        <p className={`${props.isFilter ? "active" : ""}`}>FILTER</p>
        {props.isFilter && (
          <form
            className="filter-menu menu"
            onSubmit={onSubmit}
            onReset={onReset}
          >
            <div className="filter-inner">
              <h5>Category</h5>
              <div className="filter-inn">
                <div className="filter-in">
                  {dataCate.slice(0, 4).map((cate, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={cate._id}
                          onChange={onCateChange}
                          key={cate._id}
                        />
                        <p>{cate.cateName}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="filter-in">
                  {dataCate.slice(4, 8).map((cate, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={cate._id}
                          onChange={onCateChange}
                          key={cate._id}
                        />
                        <p>{cate.cateName}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="filter-inner">
              <h5>Price</h5>
              <div>
                <input
                  type="checkbox"
                  name="50+"
                  id="50"
                  value="50"
                  onChange={onFilterChange}
                />
                <p>$50+</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="50+"
                  id="50"
                  value="30"
                  onChange={onFilterChange}
                />
                <p>$30-$49.99</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="50+"
                  id="50"
                  value="10"
                  onChange={onFilterChange}
                />
                <p>$10-$29.99</p>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="50+"
                  id="50"
                  value="1"
                  onChange={onFilterChange}
                />
                <p>$1-$9.99</p>
              </div>
            </div>
            <div className="filter-button">
              <button type="reset">Reset</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
      <div>
        <FontAwesomeIcon
          className={`icon ${!props.isGrid ? "active" : ""}`}
          icon="bars"
          onClick={listHandler}
          style={{ cursor: "pointer" }}
        />
        <p>&nbsp;</p>
        <FontAwesomeIcon
          className={`icon ${props.isGrid ? "active" : ""}`}
          icon="border-all"
          onClick={gridHandler}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={`icon ${isSorting ? "active" : ""}`}>
        <p>{sortSelected.value}</p>
        <p>&nbsp;</p>
        <FontAwesomeIcon icon="chevron-down" onClick={onSortClick} />
      </div>
      {isSorting && (
        <form className="menu sort-menu">
          <p
            onClick={azHandler}
            className={sortSelected.key === "az" ? "icon active" : ""}
          >
            A-Z
          </p>
          <p
            onClick={lowToHight}
            className={sortSelected.key === "low" ? "icon active" : ""}
          >
            Low to High
          </p>
          <p
            onClick={highToLow}
            className={sortSelected.key === "high" ? "icon active" : ""}
          >
            High to Low
          </p>
        </form>
      )}
    </div>
  );
}
