import React, { useState,useEffect } from "react";
import "./css/style.css";
import Headerwhite from "../components/layouts/Header_white";
import Footerwhite from "../components/layouts/Footer_white";
import CartButton from "../components/UI/CartButton"
import FavoriteButton from "../components/UI/FavoriteButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/FontAwesome/index";
import {dataProducts} from "../database/product.data"

import { Container, Row, Col } from "reactstrap";
import {useParams} from "react-router-dom";



export default function ProductDetail() {
  const [mainImg, setMainImg] = useState(0);
  let {id} = useParams();
  
  const product =  dataProducts.find(product => product.id == id);
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
            <Col width="25%" className="ImgProduct">
              <div className="ImgDetail">
                <img src={product.img[mainImg]} alt="" />
              </div>
              <div className="sub-img">
                {product.img.map((src, index) => (
                  <img
                    src={src}
                    onClick={() => setMainImg(index)}
                    alt=""                   
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
                <input type="number" value="1" min="1" max={product.quantity} />
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
