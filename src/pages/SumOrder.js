import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SumOrder({ cart, deleteFromCart, TotalPrice, Total }) {
  const navigate = useNavigate();

  return (
    <>
      <a
        href="#"
        style={{ fontSize: "30px" }}
        onClick={() => navigate("/order")}
      >
        ⇦
      </a>
      <h1 style={{ fontFamily: "inherit" }}>סיכום הזמנה</h1>
      <div style={{ position: "absolute", top: "23%", left: "37%" }}>
        <h2
          style={{
            fontFamily: "Courier New, Courier, monospace",
            position: "absolute",
            top: "50px",
            left: "45px",
          }}
        >
          סה"כ לתשלום : {TotalPrice}
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a
          href="#"
          class="btn btn-primary"
          onClick={() => navigate("/address")}
        >
          המשך
        </a>
      </div>
      <div class="row" style={{ position: "relative", top: "380px" }}>
        {cart.map((cartitem, index) => (
          <div class="col-2" style={{ padding: "10px", margin: "10px" }}>
            <div
              class="card"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              {" "}
              <div class="foodphoto">
                <img src={cartitem.imageUrl} />
              </div>
              <div class="card-body">
                <h5 class="card-title" key={cartitem.id}>
                  {" "}
                </h5>

                <p class="price" name="price">
                  {cartitem.price}$
                </p>
                <a
                  href="#"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteFromCart(index);
                    Total();
                  }}
                >
                  מחק
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SumOrder;
