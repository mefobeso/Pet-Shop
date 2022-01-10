import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function OrderDetails() {
  const param = useParams();
  const history = useHistory();
  const [data, setData] = useState();
  const [product, setProduct] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const sum = (items, amount, price) => {
    return items.reduce((a, b) => {
      return a + b[amount] * b[price];
    }, 0);
  };
  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    let unmounted = false;
    axios
      .get(`https://petshoptmdt.herokuapp.com/bill/${param.orderid}`, {
        cancelToken: source.token,
        timeout: 10000,
      })
      .then((res) => {
        if (!unmounted) {
          setData(res.data);
        }
      })
      .then(() => {
        if (!unmounted) {
          axios
            .get("https://petshoptmdt.herokuapp.com/products")
            .then((res) => {
              if (!unmounted) {
                setProduct(res.data.Products);
                setLoading(false);
              }
            });
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
  const cancleHandler = () => {
    axios
      .put(`https://petshoptmdt.herokuapp.com/bill/${param.orderid}`, {
        status: "cancled",
      })
      .then((res) => {
        console.log("cancled");
      })
      .catch(function (e) {
        setError(true);
        setErrorMessage(e.message);
        setLoading(false);
        if (axios.isCancel(e)) {
          console.log(`request cancelled:${e.message}`);
        } else {
          console.log("another error happened:" + e.message);
        }
      });
    history.push("/profile");
  };

  return (
    !loading && (
      <div className="profile-content-order-details container">
        <h6
          className={
            data.status === "Cancled"
              ? "red"
              : data.status === "Confirmed"
              ? "green"
              : "default"
          }
        >{`${data.status}`}</h6>
        <p>{data.date.slice(0, 10)}</p>
        {data.details.slice(0, 8).map((obj, index) => {
          const product1 = product.find((p) => p._id === obj.product_id);

          return (
            <div
              className="init"
              style={{ display: "flex" }}
              key={Math.random(1000, 2000)}
            >
              <img src={product1.img}></img>
              <div
                style={{
                  paddingLeft: "0.2em",
                  lineHeight: "0.5em",
                  width: "18em",
                }}
              >
                <h6>{product1.name}</h6>
                <p>{`x${obj.amount}`}</p>
              </div>
              <p>{`$${obj.price}`}</p>
            </div>
          );
        })}

        <div className="init">
          <h6>Tổng cộng:</h6>
          <p>{`$${sum(data.details, "amount", "price")}`}</p>
        </div>
        <div className="init">
          <h6>Hình thức thanh toán:</h6>

          <p>{`${data.payment_method}`}</p>
        </div>
        <div className="init">
          <h6>Hình thức giao hàng:</h6>
          <p>{`${data.delivery_method}`}</p>
        </div>
        {data.status === "Pending" ? (
          <button className="init-cancle" onClick={cancleHandler}>
            Hủy đơn hàng
          </button>
        ) : (
          <div></div>
        )}
      </div>
    )
  );
}
