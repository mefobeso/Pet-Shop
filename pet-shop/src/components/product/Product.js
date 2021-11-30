import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataProducts } from "../../database/product.data";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Product(props) {
  // State
  const [data, setData] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  // params
  const params = useParams();
  // useEffect
  useEffect(() => {
    if (params.category === "all product") {
      setData(dataProducts);
    } else {
      const cateFilter = dataProducts.filter(
        (p) => p.category === params.category
      );
      setData(cateFilter);
    }
  }, [params]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);

  return (
    <>
      {data.map((product, index) => {
        const addItemHandler = () => {
          setAddedProduct((prevProductList) => {
            if (addedProduct != null) {
              const duplicate = addedProduct.find((p) => p.id === product.id);
              if (duplicate) {
                const index = addedProduct.findIndex(
                  (p) => p.id === product.id
                );
                addedProduct[index].amount += 1;
                localStorage.setItem("cart", JSON.stringify(addedProduct));
                console.log(addedProduct[index]);
                console.log(addedProduct);
                return addedProduct;
              }
              return [
                ...prevProductList,
                {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: product.quantity,
                  img: product.img,
                  amount: +1,
                },
              ];
            }
            return [
              ...prevProductList,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                img: product.img,
                amount: +1,
              },
            ];
          });
        };
        const favoriteItemHandler = () => {
          setFavoriteProduct((prevProductList) => {
            if (favoriteProduct != null) {
              const duplicate = favoriteProduct.find(
                (p) => p.id === product.id
              );
              if (duplicate) {
                console.log("dup");
                return prevProductList;
              }
            }
            return [
              ...prevProductList,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                img: product.img,
              },
            ];
          });
        };

        return (
          <div className={`product ${props.isGrid ? "" : "list"}`} key={index}>
            <img src={product.img} alt="" />
            {props.isGrid && (
              <div className={`product-info`}>
                <div className={`product-info-text `}>
                  <h5>{product.name}</h5>
                  <p style={{ fontWeight: "600" }}>${product.price}</p>
                </div>

                <div>
                  <button onClick={favoriteItemHandler} className="favorite">
                    <FontAwesomeIcon icon="heart" className="icon" />
                  </button>
                  &nbsp;
                  <button onClick={addItemHandler} className="cart">
                    <FontAwesomeIcon icon="cart-plus" className="icon" />
                  </button>
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
                  <button onClick={favoriteItemHandler} className="favorite">
                    <FontAwesomeIcon icon="heart" className="icon" />
                  </button>
                  &nbsp;
                  <button onClick={addItemHandler} className="cart">
                    <FontAwesomeIcon icon="cart-plus" className="icon" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
