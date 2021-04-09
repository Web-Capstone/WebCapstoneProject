import React from "react";

import "../styles/productDetails.css";

const ProductDetails = () => {
  return (
    <div className="product_details">
      <div className="product_details_left">
        <div className="product_img"></div>
        <div className="product_description"></div>
        <div className="related_ads"></div>
      </div>
      <div className="product_details_right">
        <div className="product_info"></div>
        <div className="seller_info"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
