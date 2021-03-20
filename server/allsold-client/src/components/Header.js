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

import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/index";
import { useHistory } from "react-router";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

function Header(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const itemList = [
    {
      text: "Item A",
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
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const handleLogout = () => {
    dispatch(logoutUser(history));
    //setUser(null);
  };

  // useEffect(() => {
  //   const token = user?.token;
  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // })

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
            <Typography variant="h6" className={classes.title}>
              AllSold
            </Typography>
            {!localStorage.getItem("profile") && !props.googleAuthReducer ? (
              <Button
                href="/Login"
                variant="contained"
                className={classes.buttonLogin}
              >
                Login
              </Button>
            ) : (
              <Button
                href="/api/logout"
                variant="contained"
                className={classes.buttonGoogle}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
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
