{data.map((obj, index) => {
    // declarative
    const navigateTo = () => {
      history.push(`/profile/order/id=${data[index].id}`);
    };
    // status format

    // date format
    const day = data[index].date.toLocaleString("en-US", {
      day: "numeric",
    });
    const month = data[index].date.toLocaleString("en-US", {
      month: "short",
    });
    const year = data[index].date.toLocaleString("en-US", {
      year: "numeric",
    });
    console.log(obj.status.toLowerCase() === "wait for confirm");
    // render
    return (
      <div className="profile-content-order" key={index}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <b>Order #{index + 1}</b>
            <p>
              {day} {month} {year}
            </p>
          </div>
          <div>
            <h6
              className={
                obj.status === "Cancled"
                  ? "red"
                  : obj.status === "Confirmed"
                  ? "green"
                  : "default"
              }
            >
              {obj.status}
            </h6>
          </div>
        </div>

        <OrderProducts
          dataProduct={data[index].products}
          onClick={navigateTo}
        />
        <hr />
        <div className="bottom">
          <div className="total" style={{ fontSize: "14px" }}>
            {/* total data here */}
            <p style={{ opacity: 0.5 }}>x3 items</p>
            <p>$800</p>
          </div>

          {obj.status.toLowerCase() === "wait for confirm" ? (
            <CancleButton index={index} data={data} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  })}

  
  {data.slice(0, 8).products.map((obj, index) => {
    return (
      <div className="init" style={{ display: "flex" }}>
        <img src={obj.img}></img>
        <div
          style={{
            paddingLeft: "0.2em",
            lineHeight: "0.5em",
            width: "18em",
          }}
        >
          <h6>{obj.name}</h6>
          <p>{`x${obj.quantity}`}</p>
        </div>
        <p>{`$${obj.price}`}</p>
      </div>
    );
  })}
  <div className="init">
    <h6>Tổng cộng:</h6>
    <p>{`$${data.totalPrice}`}</p>
  </div>
  <div className="init">
    <h6>Hình thức thanh toán:</h6>
    <p>{`${data.payment_method}`}</p>
  </div>
  <div className="init">
    <h6>Hình thức giao hàng:</h6>
    <p>{`${data.delivery_method}`}</p>
  </div>
  {data.status === "Pending" ? (
    <button>Hủy đơn hàng</button>
  ) : (
    <div></div>