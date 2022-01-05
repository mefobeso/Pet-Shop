import React, { useState, useEffect } from "react";
import "./css/style.css";
import Headerwhite from "../components/layouts/Header_white";
import Footerwhite from "../components/layouts/Footer_white";
import CartButton from "../components/UI/CartButton";
import FavoriteButton from "../components/UI/FavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/FontAwesome/index";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const timeout = 0;

  const [product, setProduct] = useState([]);
  const [mainImg, setMainImg] = useState(0);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/products", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          setProduct(a.data.Products.find((p) => p._id === id));
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
  // useEffect(() => {
  //   console.log(product.img[1]);
  // }, [product.img]);
  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);
  return (
    <div>
      <Headerwhite />
      <Container>
        <div className="ProductDetail">
          <Row>
            {!loading && (
              <Col width="25%" className="ImgProduct">
                {console.log(product.img[0])}
                <div className="ImgDetail">
                  <img src={product.img[mainImg]} alt="mainImg" />
                </div>
                <div className="sub-img">
                  {product.img.map((src, index) => (
                    <img
                      src={src}
                      onClick={() => setMainImg(index)}
                      alt=""
                      key={index}
                    />
                  ))}
                </div>
              </Col>
            )}

            <Col width="75%" className="InforDetail">
              <h2 className="product-name">{product.name}</h2>
              <div className="product-rated text-warning">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-des">{product.des}</div>
              <div className="product-buy">
                <input type="number"  min="1" max={product.quantity} />
                <FavoriteButton
                  favoriteProduct={favoriteProduct}
                  product={product}
                  setFavoriteProduct={setFavoriteProduct}
                />
                <CartButton
                  addedProduct={addedProduct}
                  product={product}
                  setAddedProduct={setAddedProduct}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="DescriptionDetail">
          <Row>
            <h4>Description</h4>
            <div>{product.description}</div>
          </Row>
        </div>
      </Container>
      <Footerwhite />
    </div>
  );
}
