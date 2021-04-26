import React from "react";
import Header from "./Header";

function Margin(props) {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div style={{ marginTop: "68px", width: "100%" }}>{props.component}</div>
    </div>
  );
}

export default Margin;
