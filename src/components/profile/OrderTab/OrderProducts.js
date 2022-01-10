import React, { useState, useEffect } from "react";
import axios from "axios";
export default function OrderProducts(props) {
  console.log();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    let unmounted = false;

    axios
      .get("https://petshoptmdt.herokuapp.com/products", {
        cancelToken: source.token,
        timeout: 10000,
      })
      .then((res) => {
        if (!unmounted) {
          setData(res.data.Products);
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
      source.cancel("cancelling");
    };
  }, []);

  return (
    !loading && (
      <div className="profile-content-order-products" onClick={props.onClick}>
        {props.dataProduct.slice(0, 3).map((product, index) => {
          let product1 = data.find((p) => p._id === product.product_id);
          return (
            <div className="profile-content-order-product" key={index}>
              {/* data here */}
              <img src={product1.img[0]}></img>
              <div className="info">
                <div className="info-vertical">
                  <p>{product.name}</p>
                  <p className="price">${product.price}</p>
                </div>
                <p className="quantity">x{product.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}
