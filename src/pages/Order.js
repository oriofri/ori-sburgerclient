import React, { useEffect, useState } from "react";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

function Order({ menu, addToCart, cart }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const [filterDishs, setFilterDishs] = useState(menu);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/category/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [filterDishs]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dishes/")
      .then((res) => res.json())
      .then((data) => setFilterDishs(data));
  }, []);

  const filterDishByCategory = (category_id) => {
    fetch(`http://127.0.0.1:8000/dishes?category=${category_id}`)
      .then((res) => res.json())
      .then((data) => setFilterDishs(data));
  };

  const filterDishBySearch = () => {
    fetch(`http://127.0.0.1:8000/dishes/?search=${search}`)
      .then((res) => res.json())
      .then((data) => setFilterDishs(data));
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" onClick={() => setFilterDishs(menu)}>
            תפריט
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="fals"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nnavbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {category.map((onecategory) => {
                return (
                  <li class="nav-item" key={onecategory.id}>
                    <button
                      class="btn from-top"
                      onClick={() => filterDishByCategory(onecategory.id)}
                    >
                      {onecategory.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <input
              class="btn btn-primary"
              type="submit"
              value={"To Cart"}
              onClick={() => {
                navigate("/SumOrder");
              }}
            />
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}
            {"      "}

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                placeholder="חיפוש"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <a href="#" class="btn btn-primary" onClick={filterDishBySearch}>
                חפש
              </a>
            </form>
          </div>
        </div>
      </nav>
      <order class="order">
        <div className="row">
          {filterDishs.map((oneItem) => {
            return (
              <div className="col" key={oneItem.id}>
                <Cards
                  key={oneItem.id}
                  oneItem={oneItem}
                  addToCart={addToCart}
                  cart={cart}
                />
              </div>
            );
          })}
        </div>
      </order>
    </div>
  );
}

export default Order;
