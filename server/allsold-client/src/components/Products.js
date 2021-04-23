import React, { useEffect, useState } from "react";
import Products_sectionRow from "./Products_sectionRow";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PowerIcon from "@material-ui/icons/Power";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloudIcon from "@material-ui/icons/Cloud";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";

import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
// Components

import RelatedProductCards from "./RelatedProductCards";

//css
import "../styles/Products.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

function Products() {
  // const classes = useStyles();

  // Getting data from redux store

  const getExtraProducts = useSelector((state) => state.relatedAds.data);
  const getAllProducts = useSelector((state) => state.productsReducer.data);

  // state
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="products">
      {/* Products Sidebar */}
      <div className="products_section">
        <div className="products_section_categories">
          <h2 className="section_heading">Products</h2>
          <Products_sectionRow Icon={PhoneAndroidIcon} title="Mobile phones" />
          <Products_sectionRow Icon={FastfoodIcon} title="Food" />
          <Products_sectionRow Icon={PowerIcon} title="Electronics" />
          <Products_sectionRow Icon={BeachAccessIcon} title="Fashion" />
          <Products_sectionRow Icon={CloudIcon} title="Cars" />
          <Products_sectionRow Icon={ExpandMoreIcon} title="More" />
        </div>
        <div className="products_section_filter">
          <FormControl component="fieldset">
            {/* <FormLabel component="legend">Sort By: </FormLabel> */}
            <h2>Filter</h2>
            <div className="section_sortBy">
              <RadioGroup
                aria-label="Sort By"
                name="gender1"
                value={value}
                onChange={handleChange}
                className="sortBy_heading"
              >
                <FormControlLabel
                  value="Highest Price"
                  control={<Radio />}
                  label="Highest Price"
                />
                <FormControlLabel
                  value="Latest"
                  control={<Radio />}
                  label="Latest"
                />
                <FormControlLabel
                  value="Trending"
                  control={<Radio />}
                  label="Trending"
                />
              </RadioGroup>
            </div>
          </FormControl>
        </div>

        <div className="products_section_services">
          <h2>Services</h2>
          <Products_sectionRow Icon={PhoneAndroidIcon} title="Car Wash" />
          <Products_sectionRow Icon={FastfoodIcon} title="Home CLeaning" />
          <Products_sectionRow Icon={PowerIcon} title="Catering" />
        </div>
      </div>

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
