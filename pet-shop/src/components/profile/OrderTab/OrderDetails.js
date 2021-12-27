import React from "react";
import { useParams } from "react-router-dom";
import { dataOrder } from "../../../database/profile.data";
import { a } from "../sass/css/profile.css";
export default function OrderDetails() {
  const param = useParams();
  const data = dataOrder.find((p) => p.id === param.orderid);
  const dataIndex = dataOrder.findIndex((p) => p.id === param.orderid);
  const day = data.date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  console.log(param);
  console.log(data);
  return (
    <div className="profile-content-order-details container">
      <h4>{`#${dataIndex + 1}`}</h4>
      <h6
        className={
          data.status === "Cancled"
            ? "red"
            : data.status === "Confirmed"
            ? "green"
            : "default"
        }
      >{`${data.status}`}</h6>
      <p>{day}</p>
      {data.products.map((obj, index) => {
        return (
          <div className="init" style={{ display: "flex" }}>
            <img src={obj.img}></img>
            <div
              style={{
                paddingLeft: "0.2em",
                lineHeight: "0.5em",
                width: "18em",
              }}
            >
              <h6>{obj.name}</h6>
              <p>{`x${obj.quantity}`}</p>
            </div>
            <p>{`$${obj.price}`}</p>
          </div>
        );
      })}
      <div className="init">
        <h6>Tổng cộng:</h6>
        <p>{`$${data.totalPrice}`}</p>
      </div>
      <div className="init">
        <h6>Hình thức thanh toán:</h6>
        <p>{`${data.payment_method}`}</p>
      </div>
      <div className="init">
        <h6>Hình thức giao hàng:</h6>
        <p>{`${data.delivery_method}`}</p>
      </div>
      {data.status === "Wait for confirm" ? (
        <button>Hủy đơn hàng</button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
