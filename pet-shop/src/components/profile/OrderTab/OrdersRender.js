import React from "react";
import OrderItem from "./OrderItem";
export default function OrderRender(props) {
  return (
        <OrderItem dataOrder={props.dataOrder} />
  );
}
