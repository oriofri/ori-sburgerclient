import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Finish from "./Finish";

function Address({ cart, setOrderNum }) {
  const [cartIds, setcartIds] = useState([]);
  const [Details, SetDetails] = useState({
    dishes: cartIds,
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    cart.map((item) => cartIds.push(item.id));
  }, [cart]);

  const handleForm = (e) => {
    SetDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const CreateOrder = () => {
    fetch("http://127.0.0.1:8000/orders/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Details),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderNum(data.id);
        navigate("/finish");
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <a
        href="#"
        style={{ fontSize: "30px" }}
        onClick={() => navigate("/sumOrder")}
      >
        ⇦
      </a>
      <h1 style={{ fontFamily: "inherit" }}>פרטי המשלוח</h1>
      <div
        style={{ width: "50%", position: "absolute", top: "27%", left: "30%" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <form>
          <div class="mb-3">
            <label class="form-label">שם פרטי </label>
            <input
              type="text"
              class="form-control"
              name="first_name"
              onChange={handleForm}
            />
            <label class="form-label">שם משפחה</label>
            <input
              type="text"
              class="form-control"
              name="last_name"
              onChange={handleForm}
            />
            <label class="form-label">כתובת </label>
            <input
              type="text"
              class="form-control"
              name="address"
              onChange={handleForm}
            />
            <label class="form-label">טלפון </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-4567890"
              pattern="[0-9]{3}-[0-9]{7}"
              required
              class="form-control"
              onChange={handleForm}
            />
          </div>
        </form>
        <a href="#" onClick={CreateOrder} class="btn btn-primary">
          הזמן
        </a>
      </div>
    </div>
  );
}

export default Address;
