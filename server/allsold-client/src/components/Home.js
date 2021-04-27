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
// import purple from "@material-ui/core/colors/purple";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Footer from "./Footer";
import Billing from "./Billing";
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

const cCards = [
  {
    title: "Samsung S10",
    description: "Samsung S10 128gb refurbished best price",
    price: "$500",
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?cs=srgb&dl=pexels-mohi-syed-47261.jpg&fm=jpg",
  },
  {
    title: "iPhone 7",
    description: "Apple iPhone 7 64GB refurbished",
    price: "$400",
    image:
      "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Jeep Wrangler",
    description: "Odometer - 51344, one owner, three years old",
    price: "$34121",
    image:
      "https://images.pexels.com/photos/3551614/pexels-photo-3551614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Touring Bicycle",
    description: "Used only for one month, good condition",
    price: "$200",
    image:
      "https://images.pexels.com/photos/545004/pexels-photo-545004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Macbook Pro 2018",
    description: "Apple MacBook Pro 2018 15 inches 512GB disk space",
    price: "$900",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Apple Airpods",
    description: "2 years old Apple Airpods with charging case",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];
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
    buttonVariant: "contained",
    href: "/register",
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
    buttonText: "Purchase Plan",
    buttonVariant: "contained",
    buttonComponent: Billing,
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
    buttonComponent: Billing,
  },
];

function Home() {
  const classes = useStyles();
  return (
    <div>
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
          {cCards.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                  <Typography>Price: {card.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <AddShoppingCartIcon />
                  </Button>
                  <Button size="small" color="secondary">
                    <FavoriteBorderIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
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
          Now get most out of your advertisements by picking our plans that are
          perfectly curated for all types of individuals
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
                    <Typography component="h2" variant="h3" color="textPrimary">
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

                {tier.buttonComponent ? (
                  <tier.buttonComponent />
                ) : (
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    href={tier.href}

                    // className={classes.cssRoot}
                  >
                    {tier.buttonText}
                  </Button>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
