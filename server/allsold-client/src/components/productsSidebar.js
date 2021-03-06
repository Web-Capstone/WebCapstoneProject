import React from "react";

//Material - ui
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
//css
import "../styles/Products.css";
import Cars from "./Cars";

const ProductsSidebar = () => {
  // state
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="products_section">
      <div className="products_section_categories">
        <h2 className="section_heading">Products</h2>
        <Products_sectionRow />
      </div>
    </div>
  );
};

export default ProductsSidebar;
