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

import "../styles/Products.css";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Products() {
  const classes = useStyles();

  // state
  const [allProducts, setAllProducts] = useState();
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const getAllProducts = useSelector((state) => state.productsReducer);
  const { data } = getAllProducts;

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
          {data
            ? data.map((data) => (
                <ProductCard
                  key={data.__id}
                  productDescription={data.productDescription}
                  productTitle={data.prouctTitle}
                  productImg={data.productImg}
                  productPrice={data.productPrice}
                  productName={data.productName}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Products;
