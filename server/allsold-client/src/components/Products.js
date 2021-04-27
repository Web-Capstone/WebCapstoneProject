import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Material - Ui
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import ProductCard from "./ProductCard";

// Components
import RelatedProductCards from "./RelatedProductCards";
import ProductsSidebar from "./productsSidebar";

//css
import "../styles/Products.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    width: "200px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Products() {
  const classes = useStyles();

  // Getting data from redux store
  const getExtraProducts = useSelector((state) => state.relatedAds.data);
  const getAllProducts = useSelector((state) => state.productsReducer.data);

  return (
    <div className="products">
      <ProductsSidebar />
      {/* Products Body */}
      <div className="products_main">
        <h1>Latest Ads</h1>
        <div className="product_cards">
          {console.log("All Products", getAllProducts)}
          {getAllProducts ? (
            getAllProducts.map((data) => (
              <ProductCard
                key={data._id}
                productId={data._id}
                productDescription={data.productDescription}
                productTitle={data.prouctTitle}
                productImg={data.productImg}
                productPrice={data.productPrice}
                productName={data.productName}
              />
            ))
          ) : (
            <Skeleton
              variant="rect"
              width={210}
              height={218}
              animation="wave"
            />
          )}
        </div>

        <h1>Related Ads</h1>
        <div className="related_product_cards">
          {console.log("Extra Products ", getExtraProducts)}

          {getExtraProducts
            ? getExtraProducts.map((data) => (
                <RelatedProductCards
                  key={data._id}
                  productId={data._id}
                  productDescription={data.productDescription}
                  productTitle={data.prouctTitle}
                  productImg={data.productImg}
                  productPrice={data.productPrice}
                  productName={data.productName}
                />
                // <RelatedProductCards
                //   key={edata._id}
                //   productId={edata._id}
                //   productDescription={edata.productDescription}
                //   productTitle={edata.prouctTitle}
                //   productImg={edata.productImg}
                //   productPrice={edata.productPrice}
                //   productName={edata.productName}
                // />

                // <div key={edata._id}>
                //   <h1>hhhh</h1>
                //   <img src={edata.productImg} />
                // </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Products;
