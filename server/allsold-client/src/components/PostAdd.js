import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
// import { Autocomplete } from "@material-ui/lab";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "700px",
    border: "2px solid black",
    marginTop: "2%",
    margin: " 0 auto",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  nested: {
    paddingLeft: "10%",
  },
  heading: {
    paddingTop: "90px",
    textAlign: "center",
    fontWeight: "bolder",
  },
  subHeading: {
    fontWeight: "bold !important",
    padding: "20px",
  },
  listItem: {
    fontSize: "20px",
    margin: 0,
    marginLeft: "2%",
    padding: "10px",
  },
}));

export default function PostAdd() {
  const classes = useStyles();
  const history = useHistory();
  const [PropertiesOpen, PropertiesSetOpen] = React.useState(false);
  const [carsOpen, carsSetOpen] = React.useState(false);
  const [MobileOpen, MobileSetOpen] = React.useState(false);
  const [ElectronicsOpen, ElectronicsSetOpen] = React.useState(false);
  const [FurnitureOpen, FurnitureSetOpen] = React.useState(false);
  const [FashionOpen, FashionSetOpen] = React.useState(false);
  const [ServicesOpen, ServicesSetOpen] = React.useState(false);

  return (
    <div>
      <Typography variant="h4" className={classes.heading}>
        POST YOUR ADD
      </Typography>
      <List className={classes.root}>
        <div className={classes.left}></div>
        <Typography variant="h5" className={classes.subHeading}>
          CHOOSE A CATEGORY
        </Typography>
        <ListItem
          button
          onClick={() => carsSetOpen(!carsOpen)}
          onClick={() => history.push("/PostAdd/Car")}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            class=""
            fill-rule="evenodd"
          >
            <path
              class="rui-vUQO_"
              d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"
            ></path>
          </svg>
          <p className={classes.listItem}>Cars</p>
        </ListItem>
        <ListItem button onClick={() => MobileSetOpen(!MobileOpen)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            class=""
            fill-rule="evenodd"
          >
            <path
              class="rui-vUQO_"
              d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"
            ></path>
          </svg>
          <p className={classes.listItem}>Mobiles</p>
          {MobileOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={MobileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => history.push("/PostAdd/Mobile")}
            >
              <ListItemText primary="Mobile Phones" />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/PostAdd/Mobile")}
              className={classes.nested}
            >
              <ListItemText primary="Accessories" />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/PostAdd/Mobile")}
              className={classes.nested}
            >
              <ListItemText primary="Tablets" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => ElectronicsSetOpen(!ElectronicsOpen)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            class=""
            fill-rule="evenodd"
          >
            <path
              class="rui-vUQO_"
              d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"
            ></path>
          </svg>
          <p className={classes.listItem}>Electronics & Appliances</p>
          {ElectronicsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={ElectronicsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              onClick={() => history.push("/PostAdd/Electronics")}
              className={classes.nested}
            >
              <ListItemText primary="TV's" />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/PostAdd/Electronics")}
              className={classes.nested}
            >
              <ListItemText primary="Computers & Laptops" />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/PostAdd/Electronics")}
              className={classes.nested}
            >
              <ListItemText primary="Games & Entertainment" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
