import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProfileTab(props) {
  const tabDisplay = Array.from({ length: 2 }).map((item, index) => {
    const tabOrder = index === 0 ? "  Profile" : "Order";
    const iconOrder =
      index === 0 ? (
        <FontAwesomeIcon icon="id-card" />
      ) : (
        <FontAwesomeIcon icon="gifts" />
      );
    return (
      <div
        onClick={() => props.tabHandler(index)}
        key={index}
        className={
          props.tab === index
            ? "profile-content-tabs-item active"
            : "profile-content-tabs-item"
        }
      >
        <p>
          {iconOrder}
          {tabOrder}
        </p>
      </div>
    );
  });
  return <div className="profile-content-tabs">{tabDisplay}</div>;
}
