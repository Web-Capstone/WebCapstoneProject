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
    </List>
  );
};

export default Products_sectionRow;
