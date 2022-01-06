import React, { useState, useEffect } from "react";
// components
import Headerwhite from "../layouts/Header_white";
import Slider from "./slider/slider";
import Banner from "./banner/Banner";
import Catalog from "./catalog/Catalog";
import Footerwhite from "../layouts/Footer_white";
import Banner2 from "./banner_2/Banner2";
import Bannerside from "./banner_side/Bannerside";
import Policies from "./policies/Policies";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
// FontAwesome

function HomePage(props) {
  let timeout = 10000;
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    setLoading(true);
    axios
      .get("http://localhost:5000/products", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((res) => {
        if (!unmounted) {
          setDataProduct(res.data.Products);
        }
        setLoading(false);
      })
      .catch((e) => {
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
  }, []);
  // loader;
  const [loading, setLoading] = useState(false);
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
    <div className="bg-homepage">
      <Headerwhite onLogout={props.onLogout} />
      <Slider />
      <Banner />
      <Catalog data={dataProduct} />
      <Banner2 />
      <Bannerside />
      <Policies />
      <Footerwhite />
    </div>
  );
}
export default HomePage;
