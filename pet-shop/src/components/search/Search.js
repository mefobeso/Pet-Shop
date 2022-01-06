import React, { useState, useEffect, useRef } from "react";
import { products } from "../../database/product.data";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
// Components
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import SearchItem from "./SearchItem";
// css
import "./sass/css/search.css";
export default function Search() {
  //useHistory
  const history = useHistory();
  const navigateTo = (search) => history.push(`/home/search/keyword=${search}`);
  // useRef
  const searchInputRef = useRef();
  // State
  const [searchResult, setSearchResult] = useState([]);

  // useParam
  const params = useParams();

  // useEffect
  useEffect(() => {
    const searched = products.filter((p) =>
      p.name.toLowerCase().includes(params.search)
    );
    setSearchResult(searched);
    searchInputRef.current.value = params.search;
  }, [params]);
  // function
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigateTo(searchInputRef.current.value);
  };
  return (
    <div>
      <Headerwhite />
      <div className="search-container">
        <div className="search">
          <h2>Shopping Cart</h2>
          <h6 style={{ color: "#ddd" }}>
            {searchResult === null || searchResult.length === 0
              ? "0"
              : searchResult.length}{" "}
            products found
          </h6>
          <form action="" onSubmit={onSearchSubmit}>
            <input type="text" className="search-input" ref={searchInputRef} />
          </form>
          <hr />
          <div className="search-list">
            {searchResult.map((product) => {
              return (
                <SearchItem
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  product={product}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footerwhite />
    </div>
  );
}
