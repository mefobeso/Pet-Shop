import { toInteger } from "lodash";
import React from "react";
export default function NewsPage(props) {
  return (
    <div>
      {Array.from({ length: props.pageCount }).map((page, index) => {
        const pageChangeHandler = () => {
          props.pageChanger(index + 1);
        };
        return (
          <button
            key={index}
            className={`${
              toInteger(props.currentPage) === index + 1 ? "current" : ""
            }`}
            onClick={pageChangeHandler}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
