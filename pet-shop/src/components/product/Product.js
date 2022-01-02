import React, { useEffect, useState } from "react";
import "../FontAwesome";
import CartButton from "../UI/CartButton";
import FavoriteButton from "../UI/FavoriteButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Product(props) {
  // // State
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);

  return (
    <>
      {props.data
        .slice(0 + (props.currentPage - 1) * 8, 8 + (props.currentPage - 1) * 8)
        .map((product, index) => {
          return (
            <div
              className={`product ${props.isGrid ? "" : "list"}`}
              key={index}
            >
              {props.isGrid && (
                <div className={`product-info`}>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.img} alt="" />
                  </Link>
                  <div className={`product-info-text `}>
                    <Link
                      to={`/product/${product._id}`}
                      className="product-link"
                    >
                      <h5>{product.name}</h5>
                    </Link>
                    <p style={{ fontWeight: "600" }}>${product.price}</p>
                  </div>
                  <div>
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
                  <img src={product.img} alt="" />
                  <Link
                    to={`/product/${product.id}`}
                    style={{ width: "9em" }}
                    className="product-link"
                  >
                    <h5>{product.name}</h5>
                  </Link>
                  {/* <h5 >{product.name}</h5> */}
                  <p style={{ fontWeight: "600" }}>${product.price}</p>
                  <p style={{ width: "30em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
