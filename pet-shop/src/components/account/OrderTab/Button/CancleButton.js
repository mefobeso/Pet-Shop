import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function CancleButton(props) {
  const history = useHistory();
  const index = props.index;
  const data = props.data;
  const navigateTo = () => {
    history.push(`/cancle/id=${data[index].id}`);
  };

  const [cancleStatus, setCancleStatus] = useState(false);
  const cancleBtnHandler = () => {
    setCancleStatus(!cancleStatus);
  };
  return (
    <div>
      {data[index].status === "Wait for confirm" && (
        <div className="cc-buttons" key={index}>
          <button
            className={!cancleStatus ? "cancle" : "hidden"}
            onClick={cancleBtnHandler}
          >
            ☓
          </button>
          <button
            className={cancleStatus ? "cancle-confirm" : "hidden"}
            onClick={navigateTo}
          >
            Cancle this order ?
          </button>
        </div>
      )}
      {data[index].status !== "Wait for confirm" && <p>{data[index].status}</p>}
    </div>
  );
}
