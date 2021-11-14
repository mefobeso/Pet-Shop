import React from "react";
import OrderProducts from "./OrderProducts";
export default function OrderItem(props) {
  const data = props.dataOrder;
  // console.log(data[0]);
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
              <OrderProducts dataProduct={data[index].products}/>
              <hr/>
              <p>x3 items</p>
              <p>$800</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
