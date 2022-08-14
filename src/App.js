import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Order from "./pages/Order";
import SumOrder from "./pages/SumOrder";
import Address from "./pages/Address";
import Finish from "./pages/Finish1";

function App() {
  const [ordernum, setOrderNum] = useState();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(
      cart.reduce(
        (prevState, currentPrice) => prevState + currentPrice.price,
        0
      )
    );
  }, [cart]);

  const Total = () =>
    setPrice(
      cart.reduce(
        (prevState, currentPrice) => prevState + currentPrice.price,
        0
      )
    );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dishes/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  const addToCart = (dish) => {
    setCart((prevState) => {
      return [...prevState, dish];
    });
  };

  const deleteFromCart = (index) => {
    setCart((prevState) => {
      const prev = prevState.splice(index, 1);
      return prevState;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="order"
          element={<Order menu={menu} addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="address"
          element={<Address cart={cart} setOrderNum={setOrderNum} />}
        />
        <Route path="finish" element={<Finish ordernum={ordernum} />} />
        <Route
          path="sumorder"
          element={
            <SumOrder
              cart={cart}
              deleteFromCart={deleteFromCart}
              TotalPrice={price}
              Total={Total}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
