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
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          <h4>Leave a comment !</h4>
        </label>
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
        <button type="submit" className="send-btn" disabled={!user}>
          Send
        </button>
      </form>
    </Col>
  </Row>
</div>
</Container>