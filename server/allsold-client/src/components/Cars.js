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

function Cars() {
  const classes = useStyles();

  // Getting data from redux store
  const getAllProducts = useSelector((state) => state.productsReducer.data);

  // Sorting Products -> Cars
  const carsProduct = getAllProducts?.filter((c) => c.productName === "Cars");

  console.log(carsProduct);

  return (
    <div className="cars">
      <ProductsSidebar />
      {/* Products Body */}
      <div className="products_main">
        <h1>Latest Ads</h1>
        <div className="product_cards">
          {console.log("All Products", carsProduct)}
          {carsProduct ? (
            carsProduct.map((data) => (
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
      </div>
    </div>
  );
}

export default Cars;
