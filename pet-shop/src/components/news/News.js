import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Headerwhite from "../layouts/Header_white";
import Footerwhite from "../layouts/Footer_white";
import "./sass/css/news.css";
import dataNews from "../../database/news.data";
import NewsPage from "./NewsPage";

export default function News() {
  const history = useHistory();
  const params = useParams();
  const currentPage = params.page;
  const [pageCount, setPageCount] = useState();
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [key, setKey] = useState();

  useEffect(() => {
    setPageCount(Math.round(dataNews.length / 8));
  }, [dataNews.length]);
  const pageChanger = (page) => {
    history.replace(`/home/news/page=${page}`);
  };
  useEffect(() => {
    var dataFilter = dataNews;
    setData(dataFilter);
    if (filter.value === "Lastest News") {
      dataFilter.sort(function (a, b) {
        var dateA = a.uploadDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }); // ignore upper and lowercase
        var dateB = b.uploadDate.toLocaleString("en-US", {
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
        var dateA = a.uploadDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }); // ignore upper and lowercase
        var dateB = b.uploadDate.toLocaleString("en-US", {
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
    console.log(dataFilter);
    return;
  }, [filter.value]);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <div>
      <Headerwhite />
      <div className="news-container">
        <h2 style={{ textAlign: "center" }}>News</h2>
        <div className="news">
          <div className="news-list" key={key}>
            {dataNews
              .slice(0 + (currentPage - 1) * 8, 8 + (currentPage - 1) * 8)
              .map((obj, index) => {
                const day = obj.uploadDate.toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                });
                return (
                  <div className="news-item" key={index}>
                    <img src={obj.thumbnail} alt="" className="news-thumb" />
                    <div className="">
                      <h4 style={{ lineHeight: "0.6em" }}>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={`/news/id=${obj.id}`}
                          className="news-link"
                        >
                          {obj.title}
                        </Link>
                      </h4>
                      <p>{day}</p>
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
