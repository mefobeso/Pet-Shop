import React, { useState, useEffect } from "react";
import axios from "axios";
import { now } from "lodash";
export default function CartInfo(props) {
  const [voucher, setVoucher] = useState();
  const [voucherValue, setVoucherValue] = useState(0);
  const [error, setError] = useState();
  const voucherList = props.voucherList;
  const sum = (items, amount, price) => {
    return items.reduce((a, b) => {
      return a + b[amount] * b[price];
    }, 0);
  };
  let cost = (sum(props.cart, "amount", "price") * (100 - voucherValue)) / 100;
  const voucherHandler = (e) => {
    setVoucher(e.target.value);
  };

  useEffect(() => {
    async function setValue() {
      const found = voucherList.find((p) => p.voucherName === voucher);
      const today = new Date();
      if (found !== undefined) {
        if (found.outDate > today.toISOString()) {
          if (found.countUsed > 0) {
            setVoucherValue(found.value);
            props.setSelectedVoucher(found);
          } else {
            setError("Voucher is out of stock !");
          }
        } else {
          setError("Voucher was out of date !");
        }
      } else {
        setVoucherValue(0);
        setError();
        props.setSelectedVoucher();
      }
    }
    if (voucherList) {
      setValue();
    }
  }, [voucher]);
  return (
    <div className="cart-info">
      <h4 style={{ color: "rgb(180, 180, 180)" }}>Total Cost</h4>
      <h4 style={{ fontWeight: "bold" }}>${cost}</h4>
      <h6 style={{ color: "rgb(180, 180, 180)" }}>Have a promo code ?</h6>
      <input
        type="text"
        style={{ display: "block" }}
        placeholder="Enter your promo here !"
        onChange={voucherHandler}
      />
      {error && <h6 style={{ color: "red" }}>{error}</h6>}
      <hr />
    </div>
  );
}
