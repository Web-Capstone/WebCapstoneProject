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

import "../styles/Products.css";

function Products() {
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
        <h2>Selected Category</h2>
      </div>
    </div>
  );
}

export default Products;
