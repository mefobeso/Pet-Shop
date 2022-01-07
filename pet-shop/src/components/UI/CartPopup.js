import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
export default function CartPopup(props,onHover) {
  const history = useHistory();
  const [key, setKey] = useState();
  const [loading, setLoading] = useState(false);
  const [addedProduct, setAddedProduct] = useState([]);
  const [nearbyAdded, setNearbyAdded] = useState(0);
  useEffect(() => {
    setAddedProduct(JSON.parse(localStorage.getItem("cart")));
  }, []);
  const deleteItem = (id) => {
    setAddedProduct((prevList) => {
      const updatedList = prevList.filter((product) => product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedList));
      return updatedList;
    });
  };
  const navigateTo = () => {
    history.replace("/home/cart/confirm");
  };

  useEffect(() => {
    props.onHover.current = hoverHandler();
    console.log(props);

  }, []);
  useEffect(() => {
    setAddedProduct(JSON.parse(localStorage.getItem("cart")));
    setNearbyAdded(1);
    const timeout = setTimeout(() => {
      setNearbyAdded(0);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [JSON.parse(localStorage.getItem("cart")).length]);
  const hoverHandler = () => {
    console.log("triggered");
  };
  return addedProduct.length === 0 ? (
    <div className="hidden"></div>
  ) : (
    <div className={nearbyAdded === 1 ? "popup appear" : "popup"} key={key}>
      {addedProduct.map((item, index) => {
        return (
          <div
            style={{ display: "flex" }}
            className={`popupItem`}
            key={item.id}
          >
            <img src={item.img[0]} alt="" className={`popupImg`} />
            <div style={{ width: "7em" }}>
              <b>{item.name}</b>
              <p>x{item.amount}</p>
            </div>
            <div className="">
              <p
                style={{
                  fontSize: "0.9em",
                  lineHeight: "1.8em",
                  margin: "0px",
                }}
              >
                ${item.price * item.amount}
              </p>
              <button
                onClick={() => deleteItem(item.id)}
                className="popup-trash"
              >
                <FontAwesomeIcon icon="trash" style={{ height: "1em" }} />
              </button>
            </div>
          </div>
        );
      })}
      {addedProduct.length !== 0 ? (
        <button className="popup-checkout" onClick={navigateTo}>
          CHECK OUT
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
