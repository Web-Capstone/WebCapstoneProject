import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "../styles/About.css";
import MayankImage from "../images/mayank.jpeg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const font = "'Raleway', sans-serif";

function About() {
  const useStyles = makeStyles(() => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(  0, 0, 0, 0.8)), url('https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
      height: "50vh",
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

    career: {
      backgroundColor: "cornsilk",
      alignContent: "center",
      justifyContent: "center",
    },
    joinButton: {
      borderRadius: "inherit",
      padding: " 10px 20px",
      "&:hover": {
        backgroundColor: "black",

        boxShadow: "none",
        color: "cornsilk",
      },
    },
    secondBox: {
      marginTop: "12rem",
      alignItems: "center",
    },
    mission: {
      textAlign: "Center",
      marginTop: "50px",
      fontFamily: font,
      fontWeight: "800",
    },
    thirdBox: {
      backgroundColor: "#d8dbdf",
      minHeight: "40vh",
      marginTop: "12rem",
      alignItems: "center",
      padding: "5%",
    },
    root: {
      maxWidth: 345,
    },
    photoGrid: {
      marginTop: "10rem",
      textAlign: "center",
    },
    card: {
      justifyContent: "center",

      display: "flex",
    },
    cardContent: {
      backgroundColor: "#d8dbdf",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Grid container xs={12} direction="column">
        <Grid
          item
          container
          direction="row"
          className={classes.firstBox}
          xs={12}
        >
          <Grid
            item
            container
            xs={12}
            md={5}
            className={classes.career}
            direction="column"
          >
            <Grid item style={{ padding: "15px" }}>
              <Typography variant="h2">It all started with an idea!</Typography>
            </Grid>
            <Grid item style={{ padding: "15px" }}>
              <Typography variant="h5">
                Feel like contributing to our great idea and helping us shape
                the future of trade?
              </Typography>
            </Grid>
            <Grid item style={{ padding: "15px" }}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.joinButton}
                href="/contact"
              >
                Join us now
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className={classes.hero}></Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.secondBox}
          container
          direction="column"
        >
          <Grid item xs={8}>
            <Typography variant="h1">Our mission</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" className={classes.mission}>
              When we first sat as a team, the idea was to create a robust, fun
              and easy to use platform where people from all across Canada can
              come together under the same roof to buy, sell or even trade
              various merchandises scaled across several categories. <br />
              <br />
              What started as a cafe idea has now taken the shape as the fastest
              growing marketplace across the country.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.thirdBox}
          xs={12}
          direction="column"
        >
          <Grid item xs={8}>
            <Typography variant="h1" style={{ marginTop: "10rem" }}>
              Our People
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" className={classes.mission}>
              Apart from all the people that make this virtual marketplace work
              like a clockwork, there is a very dedicated team of founders who
              started from scratch and now have made AllSold what it is today.
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={4}
            className={classes.photoGrid}
            justify="space-around"
          >
            <Grid item xs={12} md={4} className={classes.card}>
              <Card className={classes.root}>
                <CardActionArea
                  href="https://www.linkedin.com/in/mayankrgehlot/"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    alt="Mayank Gehlot"
                    height="340"
                    image={MayankImage}
                    title="Mayank Gehlot"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mayank Gehlot
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Founder
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.card}>
              <Card className={classes.root}>
                <CardActionArea
                  href="https://www.linkedin.com/in/abhishek-jindal-aa3a40168/"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    alt="Abhishek"
                    height="340"
                    image="https://pps.whatsapp.net/v/t61.24694-24/102297194_181587993224325_3505114478030715449_n.jpg?ccb=11-4&oh=84a94ed0668a115635ad183289df3ca2&oe=608AC881"
                    title="Abhishek Jindal"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Abhishek Jindal
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Founder
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} className={classes.card}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Divyaraj"
                    height="340"
                    image="https://images.unsplash.com/photo-1475874619827-b5f0310b6e6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlbmd1aW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Divyaraj"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Divyaraj
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Founder
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
