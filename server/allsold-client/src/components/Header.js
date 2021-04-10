import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  createMuiTheme,
  ThemeProvider,
  IconButton,
  Drawer as AppDrawer,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { fade, makeStyles } from "@material-ui/core/styles";
import Logo from "../images/transparentLogo.png";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/index";
import { useHistory } from "react-router";
import PostAddIcon from "@material-ui/icons/PostAdd";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "../styles/Header.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f5d62",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    top: 0,
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  postAdd: {
    margin: "5px",
    backgroundColor: "#364547",
    color: "whitesmoke",
    fontSize: "16px",
    letterSpacing: "2px",
    fontWeight: "500px",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "whitesmoke",
      borderColor: "#0062cc",
      boxShadow: "none",
      color: "black",
    },
  },
  login: {
    backgroundColor: "#ffb037",
    margin: "5px",
    color: "black",
    fontSize: "16px",
    letterSpacing: "1px",
    fontWeight: "900px",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "whitesmoke",
      borderColor: "#0062cc",
      boxShadow: "none",
      color: "black",
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const userFirstName = user?.result.firstName;
  const itemList = [
    {
      text: user ? "Hello " + userFirstName : "Hello Guest ",
    },
    {
      text: "Item B",
    },
    {
      text: "Item C",
    },
    {
      text: "Item D",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser(history));
    setUser(null);
  };

  const onImgClick = () => {
    history.push("/");
  };

  // store.subscribe(() => {
  //   console.log("STORE CHANGED");
  // });

  // useEffect(() => {

  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppDrawer open={open}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <List className={classes.drawer}>
              {itemList.map((item, index) => {
                const { text } = item;
                return (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          </ClickAwayListener>
        </AppDrawer>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <div className="headerInfo">
              <div className="logo">
                <img src={Logo} alt="logo" onClick={onImgClick} />
              </div>
              <div className="sell">
                <Button
                  startIcon={<PostAddIcon />}
                  href="/PostAdd"
                  variant="contained"
                  className={classes.postAdd}
                >
                  Post Add
                </Button>
              </div>
              <div>
                {!user && !props.googleAuthReducer ? (
                  <Button
                    href="/Login"
                    className={classes.login}
                    variant="contained"
                    startIcon={<VpnKeyIcon />}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    href="/api/logout"
                    variant="contained"
                    className={classes.login}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { googleAuthReducer: state.googleAuthReducer };
};

export default connect(mapStateToProps)(Header);
