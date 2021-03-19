import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  CssBaseline,
  Button,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6ac099",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  title: {
    display: "none",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  buttonGoogle: {
    backgroundColor: "black",
    color: "white",
    marginRight: "10px",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(150),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const toggleHeader = () => {
    switch (props.googleAuthReducer) {
      case null:
        return;
      case false:
        return (
          <Button
            href="/oauth20/google"
            variant="contained"
            className={classes.buttonGoogle}
          >
            Login with Google
          </Button>
        );
      default:
        return (
          <Button
            href="/api/logout"
            variant="contained"
            className={classes.buttonGoogle}
          >
            Logout
          </Button>
        );
    }
  };
  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />

            {toggleHeader()}

            <Button
              href="/Login"
              variant="contained"
              className={classes.buttonLogin}
            >
              Login
            </Button>
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
