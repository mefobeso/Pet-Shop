import React, { useState } from "react";
import "./css/style.css";
import Headerwhite from "../components/layouts/Header_white";
import Footerwhite from "../components/layouts/Footer_white";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/FontAwesome/index";

import { Container, Row, Col, Button } from "reactstrap";

const product = {
  name: "Samoyed",
  price: 500,
  des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  img: [
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  ],
  quantity: 55,
};

export default function ProductDetail() {
  const [isClicked, setIsClicked] = useState(false);
  var MainImg = product.img[0];
  function onClick(index) {
    MainImg = product.img[index];
    setIsClicked(!isClicked);
  }
  return (
    <div>
      <Headerwhite />
      <Container>
        <div className="ProductDetail">
          <Row>
            <Col width="25%" className="ImgProduct">
              <div className="ImgDetail">
                <img src={MainImg} alt="" />
              </div>
              <div className="sub-img">
                {product.img.map((src, index) => (
                  <img
                    src={src}
                    alt=""
                    isClicked={isClicked}
                    onClick={onClick}
                  />
                ))}
              </div>
            </Col>
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
                <input type="number" min="1" max={product.quantity} />
                <Button color="primary">Add to Cart</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="DescriptionDetail">
          <Row>
            <h4>Description</h4>
            <div>
              Detail of description, information of product like size, date,
              name, age,... blah blah
            </div>
          </Row>
        </div>
      </Container>
      <Footerwhite />
    </div>
  );
}
