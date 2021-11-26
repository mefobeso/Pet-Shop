import React, { useState } from "react";

export default function CartQuantity(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const quantityChangeHandler = (event) => {
    if (selectedQuantity < props.maxQuantity) {
      setSelectedQuantity(event.target.value);
    }
    return;
  };
  const minusHandler = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
    return;
  };
  const plusHandler = () => {
    if (selectedQuantity < props.maxQuantity) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };
  return (
    <div className="input-group">
      <input
        type="button"
        value="-"
        data-field="quantity"
        onClick={minusHandler}
      />
      <input
        type="number"
        step="1"
        max={props.maxQuantity}
        min="0"
        value={selectedQuantity}
        onChange={quantityChangeHandler}
        name="quantity"
      />
      <input
        type="button"
        value="+"
        data-field="quantity"
        onClick={plusHandler}
      />
    </div>
  );
}
