import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProfileInfo(props) {
  const data=props.dataInfo.account;
  return (
    <div className="profile-info">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80"
        alt="profile-avatar"
        border="0"
        className="profile-info-ava profile-info-items"
      />
      <p className="profile-info-text profile-info-name">{data.name}</p>
      <p className="profile-info-text">
        Your pet: <FontAwesomeIcon icon="dog" className="profile-info-dog" />: 1{" "}
        <FontAwesomeIcon icon="cat" className="profile-info-cat" />: 1
      </p>
      <p className="profile-info-text">
        Total spent:{" "}
        <FontAwesomeIcon icon="dollar-sign" className="profile-info-dollar" />{" "}
        3000
      </p>
    </div>
  );
}
