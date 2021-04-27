import { IconButton } from "@material-ui/core";
import React from "react";

// Material - Ui
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

// Css
import "../styles/Products_sectionRow.css";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  listItem: {
    margin: "10px",
    marginLeft: "0px",
  },
  listTitle: {},
}));

const Products_sectionRow = ({}) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const iconColor = "#606060";

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      <ListItem
        button
        className={classes.listItem}
        onClick={() => history.push("/product/cars")}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
          fill={iconColor}
        >
          <path
            class="rui-vUQO_"
            d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"
          ></path>
        </svg>
        <ListItemText primary="Cars" className="products_sectionRow" />
      </ListItem>

      <ListItem
        button
        className={classes.listItem}
        onClick={() => history.push("/product/mobiles")}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
          fill={iconColor}
        >
          <path
            class="rui-vUQO_"
            d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"
          ></path>
        </svg>
        <ListItemText primary="Mobiles " className="products_sectionRow" />
      </ListItem>

      <ListItem button className={classes.listItem}>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
          fill={iconColor}
        >
          <path
            class="rui-vUQO_"
            d="M356.848 85.333l271.515 179.315v174.318h248.824l61.479 60.925v377.85l-61.479 60.925h-730.376l-61.479-60.925v-613.093l271.515-179.315zM356.848 177.586l-193.939 128.192v540.060l16.097 15.952h100.267v-192.192h155.152v192.192h116.364v-556.012l-193.939-128.192zM844.994 515.844h-216.63v345.946h216.63l16.097-15.952v-314.042l-16.097-15.952zM783.316 640v85.333h-85.333v-85.333h85.333zM352 432c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z"
          ></path>
        </svg>
        <ListItemText primary="Properties " className="products_sectionRow" />
      </ListItem>

      <ListItem
        button
        className={classes.listItem}
        onClick={() => history.push("/product/electronics")}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
          fill={iconColor}
        >
          <path
            class="rui-vUQO_"
            d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"
          ></path>
        </svg>
        <ListItemText primary="Electronics " className="products_sectionRow" />
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
              fill={iconColor}
            >
              <path
                class="rui-vUQO_"
                d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"
              ></path>
            </svg>
            <ListItemText primary="Fashion" className="products_sectionRow" />
          </ListItem>
        </List>

        <ListItem button className={classes.listItem}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            class=""
            fill-rule="evenodd"
            fill={iconColor}
          >
            <path
              class="rui-vUQO_"
              d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"
            ></path>
          </svg>
          <ListItemText primary="Furniture  " className="products_sectionRow" />
        </ListItem>
      </Collapse>

      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={open ? "Less" : "More"}
          className="products_sectionRow"
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </List>
  );
};

export default Products_sectionRow;
