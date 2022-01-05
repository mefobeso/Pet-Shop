import React, { useEffect, useState } from "react";
import dataCate from "../../database/category.data";
import axios from "axios";
export default function Category() {
  const timeout = 5000;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/category", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          var dataCate = a.data.Category;
          
        }
        setLoading(false);
      })
      .catch(function (e) {
        if (!unmounted) {
          setError(true);
          setErrorMessage(e.message);
          setLoading(false);
          if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
          } else {
            console.log("another error happened:" + e.message);
          }
        }
      });

    return () => {
      unmounted = true;
      source.cancel("Cancelling");
    };
  }, [timeout]);
  return (
    <>
      {dataCate.map((cate, index) => {
        const Background = cate.thumbnail;
        return (
          <a
            href={`/home/product/page=1`}
            className="category"
            key={index}
            style={{ backgroundImage: `url(${Background})` }}
          >
            {" "}
            <a
              href={`/home/product/page=1`}
            >
              {cate.name}
            </a>
          </a>
        );
      })}
    </>
  );
}
