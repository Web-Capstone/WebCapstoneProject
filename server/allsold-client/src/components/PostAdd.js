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
          onClick={() => history.push("/PostAdd/Cars")}
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
            <ListItem button className={classes.nested}>
              <ListItemText primary="Mobile Phones" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Accessories" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Tablets" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => PropertiesSetOpen(!PropertiesOpen)}>
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
              d="M356.848 85.333l271.515 179.315v174.318h248.824l61.479 60.925v377.85l-61.479 60.925h-730.376l-61.479-60.925v-613.093l271.515-179.315zM356.848 177.586l-193.939 128.192v540.060l16.097 15.952h100.267v-192.192h155.152v192.192h116.364v-556.012l-193.939-128.192zM844.994 515.844h-216.63v345.946h216.63l16.097-15.952v-314.042l-16.097-15.952zM783.316 640v85.333h-85.333v-85.333h85.333zM352 432c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z"
            ></path>
          </svg>
          <p className={classes.listItem}>Properties</p>
          {PropertiesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={PropertiesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Houses & Apartments" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="PG & Guest House" />
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
            <ListItem button className={classes.nested}>
              <ListItemText primary="TV's" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Computers & Laptops" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Games & Entertainment" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => FurnitureSetOpen(!FurnitureOpen)}>
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
              d="M268.748 91.803l-70.244 96.818v124.45l-24.559-0.152-82.195 104.783v430.333h152.539v75.637h91.975v-75.637h333.816v75.637h91.975v-75.637h170.135v-436.888l-82.295-97.219h-4.335v-117.692l-78.665-104.431h-498.206zM429.605 396.172l-79.319-82.195-59.755-0.353v-95.152l25.112-34.692h405.422l32.524 43.213v86.934h-87.64l-65.504 77.403v75.284h-170.792v-70.444zM183.829 449.472l34.743-44.274 92.48 0.505 26.626 27.632v125.207h354.845v-133.528l16.137-19.111h98.633l32.977 38.93v311.176h-656.49v-306.588z"
            ></path>
          </svg>
          <p className={classes.listItem}>Furniture</p>
          {FurnitureOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={FurnitureOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Sofa & Dining" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Beds & Wardrobes" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => FashionSetOpen(!FashionOpen)}>
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
              d="M708.012 340.654v471.101h-391.011v-471.101h-116.125l48.317-144.445 32.889-26.596h106.075c17.154 51.007 65.474 87.906 122.014 87.906s104.908-36.899 122.062-87.906h101.002l28.423 17.258 56.135 153.784h-109.781zM827.639 132.662l-71.867-43.647h-197.179l-0.252 40.097c-0.204 26.393-21.824 47.809-48.165 47.809-26.393 0-47.964-21.468-48.116-47.861l-0.304-39.993h-208.092l-73.39 59.282-91.204 272.855h147.339v471.101h552.103v-471.101h144.397l-105.212-288.538z"
            ></path>
          </svg>
          <p className={classes.listItem}>Fashion</p>
          {FashionOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={FashionOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Mens" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Womens" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Kids" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => ServicesSetOpen(!ServicesOpen)}>
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
              d="M845.419 795.973l-18.078 18.059h-643.422l-18.078-18.059v-37.922l18.078-18.059h643.422l18.078 18.059v37.922zM198.941 562.396l43.308-63.059v-153.289c0-46.52 37.845-84.365 84.365-84.365h356.844c46.52 0 84.365 37.845 84.365 84.365v155.441l46.249 54.576v15.597h-615.134v-9.269zM859.19 663.070h-320.595v-14.48h352.403v-120.712l-46.249-54.576v-127.248c0-88.94-72.347-161.287-161.287-161.287h-144.863v-18.924h71.095v-76.922h-216.422v76.922h68.404v18.924h-135.058c-88.94 0-161.287 72.347-161.287 161.287v129.404l-43.308 63.040v110.096h339.653v14.48h-309.596l-63.155 63.136v101.616l63.155 63.136h707.114l63.155-63.136v-101.616l-63.155-63.136z"
            ></path>
          </svg>
          <p className={classes.listItem}>Services</p>
          {ServicesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={ServicesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Electronics & Computers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Education & Classes" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Health & Beauty" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
