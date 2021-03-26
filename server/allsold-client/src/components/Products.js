import React from "react";
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
import Grid from "@material-ui/core/Grid";

import "../styles/Products.css";

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
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="products">
      <div className="products_section">
        <div className="products_section_categories">
          <h2>Categories</h2>
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
            <h3>Sort By</h3>
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

      <div className="products_main">
        <h1>Selected Category</h1>
        <div className="products_main_grid">
          <Grid container spacing={0}>
            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SX450_.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>
            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41BFcDXPYZL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/517E3cDRS1L.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
        <div className="products_main_grid">
          <Grid container spacing={0}>
            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SX450_.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>
            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41BFcDXPYZL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/517E3cDRS1L.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>

            <div className="products_main_grid_card">
              <Grid item xs>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
                  alt="Products"
                  className="products_main_grid_img"
                />
                <div className="products_main_grid_details">
                  <div className="products_main_grid_info">
                    <h2>Product Title</h2>
                    <h1>$23</h1>
                  </div>
                  <h3 className="products_main_grid_seller">
                    Seller: <span>Abhishek</span>
                  </h3>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>

        <h1>Recommended Products</h1>
      </div>
    </div>
  );
}

export default Products;
