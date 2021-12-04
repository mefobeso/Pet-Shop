import { isUndefined, toInteger } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataProducts } from "../../database/product.data";
import "../FontAwesome";
import CartButton from "../UI/CartButton";
import FavoriteButton from "../UI/FavoriteButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Product(props) {
  // State
  const [data, setData] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  // params
  const params = useParams();
  // useEffect

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);

  useEffect(() => {
    if (params.category === "all product") {
      const cateFilter = dataProducts;
      setData(cateFilter);
      if (props.filterPrice === 50) {
        setData(cateFilter);
      }
      if (props.filterPrice === 30) {
        setData(cateFilter.filter((p) => p.price >= 30 && p.price < 50));
        console.log(data);
      }
      if (props.filterPrice === 10) {
        setData(cateFilter.filter((p) => p.price > 10 && p.price < 30));
        console.log(data);
      }
      if (props.filterPrice === 1) {
        setData(cateFilter.filter((p) => p.price > 0 && p.price < 10));
        console.log(data);
      }
    } else {
      const cateFilter = dataProducts.filter(
        (p) => p.category === params.category
      );
      setData(cateFilter);
    }
  }, [params, props.filterPrice]);
  

  return (
    <>
      {data.map((product, index) => {
        return (
          <div className={`product ${props.isGrid ? "" : "list"}`} key={index}>
            <Link to={`/product/${product.id}`}>
            <img src={product.img} alt="" />
            </Link>
            {props.isGrid && (
              <div className={`product-info`}>
                <div className={`product-info-text `}>
                <Link to={`/product/${product.id}`}>
                  <h5>{product.name}</h5>
                </Link>
                  <p style={{ fontWeight: "600" }}>${product.price}</p>
                </div>

                <div>
                  {/* <button onClick={favoriteItemHandler} className="favorite">
                    <FontAwesomeIcon icon="heart" className="icon" />
                  </button> */}
                  <FavoriteButton
                    favoriteProduct={favoriteProduct}
                    product={product}
                    setFavoriteProduct={setFavoriteProduct}
                  />
                  &nbsp;
                  <CartButton
                    addedProduct={addedProduct}
                    product={product}
                    setAddedProduct={setAddedProduct}
                  />
                </div>
              </div>
            )}

            {!props.isGrid && (
              <div className="product-info list">
                <h5 style={{ width: "8em" }}>{product.name}</h5>
                <p style={{ fontWeight: "600" }}>${product.price}</p>
                <p style={{ width: "30em" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="">
                  <FavoriteButton
                    favoriteProduct={favoriteProduct}
                    product={product}
                    setFavoriteProduct={setFavoriteProduct}
                  />
                  &nbsp;
                  <CartButton
                    addedProduct={props.addedProduct}
                    product={product}
                    setAddedProduct={setAddedProduct}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
