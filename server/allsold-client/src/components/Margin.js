import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Margin(props) {
  return (
    <div style={{ display: "flex" }}>
      <Header />
      <div style={{ marginTop: "62px", width: "100%" }}>{props.component}</div>
    </div>
  );
}

export default Margin;
