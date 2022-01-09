import React, { useState, useEffect } from "react";
import axios from "axios";
export default function CartInfo(props) {
  const [voucher, setVoucher] = useState();
  const [voucherValue, setVoucherValue] = useState(0);
  const [voucherList, setVoucherList] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

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
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://petshoptmdt.herokuapp.com/voucher", {
        cancelToken: source.token,
        timeout: 10000,
      })
      .then((res) => {
        if (!unmounted) {
          setVoucherList(res.data.vouchers);
          setLoading(false);
        }
      })
      .catch(function (e) {
        if (!unmounted) {
          setError(true);
          setErrorMessage(e.message);
          setLoading(false);
          if (axios.isCancel(e)) {
            console.log(e.message);
          } else {
            console.log("another error" + e.message);
          }
        }
      });
    return () => {
      unmounted = true;
      source.cancel("cancelling");
    };
  }, []);
  useEffect(() => {
    async function setValue() {
      const found = voucherList.find((p) => p.voucherName === voucher);
      console.log(found !== undefined);
      if (found !== undefined) {
        setVoucherValue(found.value);
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
      <hr />
    </div>
  );
}
