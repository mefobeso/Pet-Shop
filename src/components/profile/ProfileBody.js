import React from "react";
import InfoRender from "./InfoTab/InfoRender";
import OrderRender from "./OrderTab/OrdersRender";
export default function ProfileBody(props) {
  return (
    <div className="profile-content-body">
      {props.tab === 0 ? (
        <InfoRender dataInfo={props.dataInfo} />
      ) : (
        <OrderRender dataOrder={props.dataOrder} />
      )}
    </div>
  );
}
