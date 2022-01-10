import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";

export default function NewsDetails() {
  const timeout = 5000;
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get(`https://petshoptmdt.herokuapp.com/posts/${params.id}`, {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          setData(a.data.post);
          console.log("setData");
          setLoading(false);
        }
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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <div className="loader">
      <FadeLoader size={30} color={"#123abc"} loading={loading} />
    </div>
  ) : (
    <div>
      <Headerwhite />
      <div className="news-details news-container">
        <div className="news-contents">
          <h4>{data.title}</h4>
          <h6>{data.UploadDate.slice(0, 10)}</h6>
          <h6>{data.description}</h6>
          <img src={data.img[0]} alt="" className="news-details-img" />
          <p>{data.text}</p>
          <img src={data.img[1]} alt="" />
          <img src={data.img[2]} alt="" />
          <img src={data.img[3]} alt="" />
        </div>
      </div>
      <Footerwhite />
    </div>
  );
}
