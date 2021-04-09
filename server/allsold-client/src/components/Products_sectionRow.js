import { IconButton } from "@material-ui/core";
import React from "react";

import "../styles/Products_sectionRow.css";

const Products_sectionRow = ({ Icon, title }) => {
  return (
    <div className="products_sectionRow">
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default Products_sectionRow;
