import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <h1> Ori's Burger</h1>
      <button class="cta button" onClick={() => navigate("/order")}>
        <span>יאללה מתחילים</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9  "></polyline>
        </svg>
      </button>
    </>
  );
}

export default Main;
