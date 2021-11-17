import React, { useState } from "react";
import { dataOrder } from "../ProfileData";
import OrderProducts from "./OrderProducts";
export default function OrderItem(props) {
  const data = props.dataOrder;
  console.log(data[0].status);
  const [orderStatus, setOrderStatus] = useState(props.status);
  return (
    <div className="profile-content-orders">
      <div className="scroll__container">
        {data.map((obj, index) => {
          // declarative
          // date format
          const day = data[index].date.toLocaleString("en-US", {
            day: "numeric",
          });
          const month = data[index].date.toLocaleString("en-US", {
            month: "short",
          });
          const year = data[index].date.toLocaleString("en-US", {
            year: "numeric",
          });
          // render
          return (
            <div className="profile-content-order" key={index}>
              <b>Order #{index + 1}</b>
              <p>
                {day} {month} {year}
              </p>
              <OrderProducts dataProduct={data[index].products} />
              <hr />
              <div className="bottom">
                <div className="total" style={{ fontSize: "14px" }}>
                  {/* total data here */}
                  <p style={{ opacity: 0.5 }}>x3 items</p>
                  <p>$800</p>
                </div>
                {data[index].status === "Wait for confirm" && (
                  <div className="cc-buttons">
                    <button className="cancle">☓</button>
                    <button className="confirm">✓</button>
                  </div>
                )}
                {data[index].status !== "Wait for confirm" && (
                  <p>{data[index].status}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
