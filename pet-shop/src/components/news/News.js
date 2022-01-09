import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import "./sass/css/news.css";
import NewsPage from "./NewsPage";
import axios from "axios";

export default function News() {
  const history = useHistory();
  const params = useParams();
  const timeout = 10000;

  const currentPage = params.page;
  const [pageCount, setPageCount] = useState();
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [key, setKey] = useState();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setPageCount(Math.round(data.length / 8));
  }, [data.length]);
  const pageChanger = (page) => {
    history.replace(`/home/news/page=${page}`);
  };

  useEffect(() => {
    setLoading(true);
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://petshoptmdt.herokuapp.com/posts", {
        cancelToken: source.token,
        timeout: timeout,
      })
      .then((a) => {
        if (!unmounted) {
          // @ts-ignore
          var dataFilter = a.data.posts;
          setData(dataFilter);
          if (filter.value === "Lastest News") {
            dataFilter.sort(function (a, b) {
              var dateA = a.UploadDate.toLocaleString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              }); // ignore upper and lowercase
              var dateB = b.UploadDate.toLocaleString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              });
              if (dateA < dateB) {
                return -1;
              }
              if (dateA > dateB) {
                return 1;
              }
              // names must be equal
              return 0;
            });
            setKey(Math.random());
          }
          if (filter.value === "Oldest News") {
            dataFilter.sort(function (a, b) {
              var dateA = a.UploadDate.toLocaleString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              }); // ignore upper and lowercase
              var dateB = b.UploadDate.toLocaleString("en-US", {
                month: "short",
                year: "numeric",
                day: "numeric",
              });
              if (dateA < dateB) {
                return 1;
              }
              if (dateA > dateB) {
                return -1;
              }
              // names must be equal
              return 0;
            });
            setKey(Math.random());
          }
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
  }, [filter.value, timeout]);

  // useEffect(() => {
  //   console.log(pageCount);
  //   console.log(filter);
  // }, [filter, pageCount]);
  return (
    <div>
      <Headerwhite />
      <div className="news-container">
        <h2 style={{ textAlign: "center" }}>News</h2>
        <div className="news">
          <div className="news-list" key={key}>
            {data
              .slice(0 + (currentPage - 1) * 8, 8 + (currentPage - 1) * 8)
              .map((obj, index) => {
                const day = obj.UploadDate.slice(8,10)
                const month = obj.UploadDate.slice(5,7)
                const year = obj.UploadDate.slice(0,4)
                return (
                  <div className="news-item" key={index}>
                    <img src={obj.thumbnail} alt="" className="news-thumb" />
                    <div className="">
                      <h4 style={{ lineHeight: "0.6em" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/news/details/id=${obj._id}`}
                          className="news-link"
                        >
                          {obj.title}
                        </Link>
                      </h4>
                      <p>Đăng ngày {day} tháng {month} năm {year}</p>
                      <p>{obj.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="news-filter">
            <h4>Filter</h4>
            <Dropdown
              placeholder="Select an option"
              options={["Lastest News", "Oldest News"]}
              onChange={(value) => setFilter(value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
          </div>
        </div>
        <NewsPage
          pageCount={pageCount}
          currentPage={params.page}
          pageChanger={pageChanger}
        />
      </div>
      <Footerwhite />
    </div>
  );
}
