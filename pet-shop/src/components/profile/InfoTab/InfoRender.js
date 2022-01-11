import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorModal from "../../UI/ErrorModal";

export default function InfoRender(props) {
  const dataInfo = props.dataInfo.account;

  const [edit, setEdit] = useState(false);
  const [key, setKey] = useState();
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [password, setPassword] = useState(dataInfo.password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState(dataInfo.address);
  const [phone, setPhone] = useState(dataInfo.phone);
  const [error, setError] = useState();
  const onEdit = () => {
    setEdit(true);
  };
  const onPasswordEdit = () => {
    setPasswordEdit(true);
  };
  const okayButtonHandler = () => {
    setError(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://petshoptmdt.herokuapp.com/auth/${dataInfo._id}`, {
        address: address,
        phone: phone,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setEdit(false);
        window.location.reload();
      })
      .catch(function (e) {
        setError({ title: "Error", message: e.message });
      });
  };
  const onCancel = (e) => {
    setEdit(false);
    setPasswordEdit(false);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  return !edit ? (
    <div className="profile-content-info">
      <button className="edit" onClick={onEdit}>
        <FontAwesomeIcon icon="pen" />
      </button>
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
  ) : error ? (
    <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={okayButtonHandler}
    />
  ) : (
    <form className="edit-form" onSubmit={onSubmit}>
      <label htmlFor="address">
        <FontAwesomeIcon icon="home" /> Address:{" "}
      </label>
      <input
        type="text"
        defaultValue={dataInfo.address}
        name="address"
        onChange={addressChangeHandler}
      />
      <label htmlFor="phone">
        <FontAwesomeIcon icon="phone" /> Phone:{" "}
      </label>
      <input
        type="text"
        defaultValue={dataInfo.phone}
        onChange={phoneChangeHandler}
      />
      <label htmlFor="email">
        <FontAwesomeIcon icon="envelope" /> Email:
      </label>
      <input
        type="text"
        placeholder="Address"
        value={dataInfo.email}
        readOnly
        style={{ backgroundColor: "#ddd", color: "gray" }}
      />
      {passwordEdit ? (
        <Fragment>
          <label htmlFor="password">
            <FontAwesomeIcon icon="lock" /> Password:
          </label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            style={{ width: "30%" }}
          />
          <label htmlFor="">
            <FontAwesomeIcon icon="lock" /> Confirm Password:
          </label>
          <input
            type="password"
            onChange={confirmPasswordChangeHandler}
            style={{ width: "30%" }}
          />
        </Fragment>
      ) : (
        <>
          <label htmlFor="password">
            <FontAwesomeIcon icon="lock" /> Password:
            <FontAwesomeIcon
              icon="edit"
              style={{ width: "5em", cursor: "pointer" }}
              onClick={onPasswordEdit}
            />
          </label>
          <input
            type="password"
            defaultValue={dataInfo.password}
            onChange={addressChangeHandler}
            style={{ backgroundColor: "#ddd", color: "gray" }}
            readOnly
          />
        </>
      )}

      <button type="submit">Confirm</button>
      <button type="button" style={{ float: "right" }} onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
