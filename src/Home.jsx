import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const BASE_URL = "http://13.235.87.215:4000";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const data = {
      token: localStorage.getItem("token"),
    };
    axios
      .post(BASE_URL + "/api/v1/category/all", data)
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          setCategoryList(response.data.categories);
        }
      });
  });

  return (
    <div id="homePage">
      <div id="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-center">Welcome to Ecommerce</h2>
            <div className="category-list d-flex flex-row justify-content-center align-items-center">
              <div className="category-items rounded-3 d-flex flex-row justify-content-center align-items-center">
                <Link to={"/products"}>All Product</Link>
              </div>
              {categoryList.map((category) => (
                <div
                  key={category.categoryId}
                  className="category-items rounded-3 d-flex flex-row justify-content-center align-items-center"
                >
                  <p className="text-white">{category.name}</p>
                </div>
              ))}
            </div>
            <div className="category-title text-center">
              Select a category to start shopping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
