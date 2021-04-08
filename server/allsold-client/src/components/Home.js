import React from "react";
import {
  Typography,
  Container,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} from "@material-ui/core";
import "../styles/home.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import purple from "@material-ui/core/colors/purple";
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
  productContainer: {
    padding: "20px 0",
  },
  productTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },

  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  priceCard: {
    marginTop: theme.spacing(4),
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  // cssRoot: {
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   "&:hover": {
  //     backgroundColor: purple[700],
  //   },
  // },
}));

const cards = [1, 2, 3, 4, 5, 6];
const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 ads per month",
      "2 active ads ",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "ProSeller",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 ads per month",
      "10 active ads",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Corporate Seller",
    price: "30",
    description: [
      "50 ads per month",
      "30 active ads",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

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

        <Container maxwidth="lg" className={classes.productContainer}>
          <Typography
            variant="h3"
            className={classes.productTitle}
            align="center"
          >
            Latest Products at Glance
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?cs=srgb&dl=pexels-mohi-syed-47261.jpg&fm=jpg"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Product Name
                    </Typography>
                    <Typography>Product Description of the product</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="secondary">
                      Favorite
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Now get most out of your advertisements by picking our plans that
            are perfectly curated for all types of individuals
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card className={classes.priceCard}>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    action={tier.title === "ProSeller" ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="secondary"
                      // className={classes.cssRoot}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Home;
