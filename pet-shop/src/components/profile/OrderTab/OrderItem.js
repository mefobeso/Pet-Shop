import React, { useState, useEffect } from "react";
import OrderProducts from "./OrderProducts";
import CancleButton from "./Button/CancleButton";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function OrderItem(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    let unmounted = false;
    axios
      .get("https://petshoptmdt.herokuapp.com/bill", {
        cancelToken: source.token,
        timeout: 10000,
      })
      .then((res) => {
        if (!unmounted) {
          setData(
            res.data.bills.filter(
              (p) => p.user_id === props.dataOrder.account._id
            )
          );
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
  const history = useHistory();
  return (
    !loading && (
      <div className="profile-content-orders">
        <div className="scroll__container">
          {data.map((obj, index) => {
            const navigateTo = () => {
              history.push(`/profile/order/id=${data[index]._id}`);
            };
            // date format
            const day = data[index].date.slice(8, 10);
            const month = data[index].date.slice(5, 7);
            const year = data[index].date.slice(0, 4);
            return (
              <div className="profile-content-order" key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <b>Order #{index + 1}</b>
                    <p>
                      {day} {month} {year}
                    </p>
                  </div>
                  <div>
                    <h6
                      className={
                        obj.status === "Cancled"
                          ? "red"
                          : obj.status === "Confirmed"
                          ? "green"
                          : "default"
                      }
                    >
                      {obj.status}
                    </h6>
                  </div>
                </div>
                <OrderProducts
                  dataProduct={data[index].details}
                  onClick={navigateTo}
                />
                <hr />
                <div className="bottom">
                  <div className="total" style={{ fontSize: "14px" }}>
                    {/* total data here */}
                    <p style={{ opacity: 0.5 }}>x{obj.details.length} items</p>
                    <p>$800</p>
                  </div>

                  {obj.status.toLowerCase() === "pending" ? (
                    <CancleButton index={index} data={data} />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
