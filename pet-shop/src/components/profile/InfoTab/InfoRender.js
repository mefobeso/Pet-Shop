import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function InfoRender(props) {
  console.log(props.dataInfo.account);
  const dataInfo = props.dataInfo.account;
  return (
    <div className="profile-content-info">
      <p>
        <FontAwesomeIcon icon="home" />
        <b> Address</b> : {dataInfo.address}
      </p>
      <p>
        <FontAwesomeIcon icon="phone" />
        <b> Phone</b> : {dataInfo.phone}
      </p>
      <p>
        <FontAwesomeIcon icon="envelope" />
        <b> Email</b> : {dataInfo.email}
      </p>
    </div>
  );
}
