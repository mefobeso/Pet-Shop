import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function InfoRender(props) {
  return (
    <div className="profile-content-info">
      <p>
        <FontAwesomeIcon icon="home" />
        <b> Address</b> : {props.dataInfo[0].address}
      </p>
      <p>
        <FontAwesomeIcon icon="phone" />
        <b> Phone</b> : {props.dataInfo[0].phone}
      </p>
      <p>
        <FontAwesomeIcon icon="envelope" />
        <b> Email</b> : {props.dataInfo[0].email}
      </p>
    </div>
  );
}
