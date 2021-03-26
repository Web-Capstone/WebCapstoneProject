import React from "react";
import { Typography, Container } from "@material-ui/core";
import bannerImage from "../images/HomeBanner.png";
import "../styles/home.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DirectionsIcon from "@material-ui/icons/Directions";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6ac099",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(  0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1403&q=80')`,
    height: "80vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "3rem",
  },
  explore: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    marginTop: "30px",
    maxWidth: "100px",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <div className="bannerImage"></div>
      <h2 className="homePageHeading">Sell & Buy at one Place</h2> */}
        <Box className={classes.hero}>
          <Box>
            <Typography variant="h3">
              One Stop Destination for all your shopping needs
            </Typography>

            <Button
              className={classes.explore}
              variant="contained"
              color="primary"
              size="large"
              href="/products"
            >
              Explore
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Home;
