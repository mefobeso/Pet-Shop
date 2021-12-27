import React from "react";
import OrderProducts from "./OrderProducts";
import CancleButton from "./Button/CancleButton";
import { useHistory } from "react-router-dom";
export default function OrderItem(props) {
  const data = props.dataOrder;
  console.log(data);
  const history = useHistory();
  return (
    <div className="profile-content-orders">
      <div className="scroll__container">
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
            <div className="profile-content-order" key={index} >
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <b>Order #{index + 1}</b>
                <p>
                  {day} {month} {year}
                </p>
              </div>
              <div>
                <h6 className={obj.status==="Cancled"?"red":obj.status==="Confirmed"?"green":"default"}>{obj.status}</h6>
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
      </div>
    </div>
  );
}
