import React, { useState, useEffect } from "react";
import "./css/style.css";
import Headerwhite from "../components/layouts/Header_white";
import Footerwhite from "../components/layouts/Footer_white";
import CartButtonText from "../components/UI/CartButtonText";
import FavoriteButton from "../components/UI/FavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/FontAwesome/index";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import CartSimilar from "../components/cart/CartSimilar";

export default function ProductDetail() {
  const timeout = 0;
  let { id } = useParams();

  const [addedProduct, setAddedProduct] = useState([]);
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  // this product
  const [product, setProduct] = useState();
  // user logged in?
  const [user, setUser] = useState();
  const [bill, setBill] = useState();
  const [bought, setBought] = useState();
  const [userList, setUserList] = useState();
  const [name, setName] = useState();
  // rating
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [mainImg, setMainImg] = useState(0);
  // async
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  let endpoints = [
    ` https://petshoptmdt.herokuapp.com/products/${id}`,
    "https://petshoptmdt.herokuapp.com/auth",
    `https://petshoptmdt.herokuapp.com/bill/`,
  ];
  // get product details
  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: product }, { data: user }, { data: bill }]) => {
        setUserList(user.accounts);
        setProduct(product);
        setBill(bill.bills);
        setUserList(user.accounts);
        console.log({ product, user, bill });
        setLoading(false);
      }
    );
  }, []);

  // set localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addedProduct));
    localStorage.setItem("favorite", JSON.stringify(favoriteProduct));
  }, [addedProduct, favoriteProduct]);
  // logged in ?
  useEffect(() => {
    async function alreadyBuy() {
      setBought(bill.find((p) => p.user_id === user.id));
    }
    if (user && bill) {
      alreadyBuy();
    }
    return () => {
      setBought();
    };
  }, [user, bill]);
  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("user")));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // Change Handler
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const onRatingChange = (e) => {
    setRating(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (product && user) {
      let commentData = [
        ...product.comments,
        { user_id: user.id, rating: rating, comment: comment },
      ];
      console.log(commentData);
      axios
        .put(`https://petshoptmdt.herokuapp.com/products/${id}`, {
          comments: commentData,
        })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch(function (e) {
          if (!user) {
            setError(true);
            setErrorMessage("You haven't logged in!");
          }
          setError(true);
          setErrorMessage(e.message);
        });
    }
  };
  return (
    !loading && (
      <div>
        <Headerwhite />
        <Container>
          <div className="ProductDetail">
            <Row>
              {!loading && product && (
                <Col width="25%" className="ImgProduct">
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
                  <input type="number" min="1" max={product.quantity} />

                  <CartButtonText
                    className="button"
                    addedProduct={addedProduct}
                    product={product}
                    setAddedProduct={setAddedProduct}
                  ></CartButtonText>
                </div>
                <hr />
                <br />

                <CartSimilar />
              </Col>
            </Row>
          </div>
          <hr />
          {/* <br /> */}
          <div className="DescriptionDetail">
            <Row>
              <Col>
                <h4>Description</h4>
                <div>{product.description}</div>
              </Col>
              <Col></Col>
            </Row>
            <hr />
            <Row>
              <Col width="50%">
                <h4>Comments</h4>
                <div className="comment">
                  {product.comments ? (
                    <div>
                      {product.comments
                        .sort(function (a, b) {
                          return b.rating - a.rating;
                        })
                        .slice(0, 4)
                        .map((comment, index) => {
                          return (
                            <div className="comment-display" key={index + 10}>
                              <div style={{ display: "flex" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/portrait-of-beautiful-tabby-cat-picture-id1291082120?b=1&k=20&m=1291082120&s=170667a&w=0&h=GdTZThfTc1LSGBMc7YBPtZF9W7Rrc6Q9GOTX5PB608U="
                                  className="comment-img"
                                  alt=""
                                />
                                <b style={{ minWidth: "6em" }}>
                                  {
                                    userList.find(
                                      (p) => p._id === comment.user_id
                                    ).name
                                  }
                                </b>
                                <FontAwesomeIcon
                                  icon="star"
                                  className="product-rated text-warning"
                                />
                                <p>{comment.rating}</p>
                              </div>
                              <h6>{comment.comment}</h6>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div>
                      <p>There is no comment yet !</p>
                    </div>
                  )}
                </div>
              </Col>
              <Col width="50%">
                {user ? (
                  bought ? (
                    <form action="" onSubmit={onSubmit}>
                      <h4>Leave a comment !</h4>
                      <label htmlFor=""></label>
                      <div className="product-rated text-warning">
                        <FontAwesomeIcon icon="star" />
                        <input
                          type="number"
                          placeholder="Rating"
                          onChange={onRatingChange}
                          className="comment-rating"
                          max="5"
                          min="1"
                        />
                      </div>
                      <textarea
                        type="text"
                        className="comment-input"
                        placeholder="Say something about this product!"
                        onChange={onCommentChange}
                        maxLength="300"
                      />
                      <button
                        type="submit"
                        className="send-btn"
                        disabled={!user}
                      >
                        Send
                      </button>
                    </form>
                  ) : (
                    <p>Buy this product to comment</p>
                  )
                ) : (
                  <a href="/login">Login to rate this product !</a>
                )}
              </Col>
            </Row>
          </div>
        </Container>
        <Footerwhite />
      </div>
    )
  );
}
