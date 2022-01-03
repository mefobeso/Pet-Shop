import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import axios from "axios";

export default function NewsDetails() {
  const timeout = 5000;
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
 
  useEffect( () => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/posts", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          var dataFilter = a.data.posts.filter(p=>p._id===params.id);
          setData(dataFilter[0]);
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
  }, [ timeout]);
  useEffect(()=>{console.log(data)},[data])
  console.log(params);
  return (
    <div>
      <Headerwhite />
      <div className="news-details news-container">
          <h4>{data.title}</h4>
          <h6>{data.description}</h6>
          <p>{data.text}</p>
      </div>
      <Footerwhite />
    </div>
  );
}
