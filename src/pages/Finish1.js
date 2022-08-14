import React from "react";

function Finish1({ ordernum }) {
  console.log(ordernum);
  return (
    <>
      <h2
        style={{
          fontSize: "500%",
          fontFamily: "inherit",
          position: "absolute",
          top: "20%",
          right: "25%",
          color: "black",
        }}
      >
        {" "}
        תודה שהזמנת{" "}
      </h2>{" "}
      <br></br>
      <h2
        style={{
          fontSize: "400%",
          fontFamily: "Courier New, Courier, monospace",
          position: "absolute",
          right: "41%",
          top: "34%",
          color: "rosybrown",
        }}
      >
        {" "}
        Ori's Burger{" "}
      </h2>
      <h3
        style={{
          fontSize: "240%",
          position: "absolute",
          right: "50%",
          top: "45%",
          color: "black",
        }}
      >
        מספרך בתור :{ordernum}
      </h3>
    </>
  );
}

export default Finish1;
