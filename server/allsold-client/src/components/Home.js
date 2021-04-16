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
import BuySell from "../images/buySell.jpg";
import ExploreIcon from "@material-ui/icons/Explore";
import happyCustomerImg from "../images/happyCustomer.jpg";
import HomeBannerProducts from "./HomeBannerProducts";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#364547",
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
    backgroundColor: "#293241",
    color: "whitesmoke",
    fontSize: "16px",
    letterSpacing: "1px",
    fontWeight: "900px !important",
    width: "justifyContent",
    maxWidth: "150px",
  },
  productContainer: {
    padding: "30px 0 ",
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
  button: {
    fontSize: "18px",
    marginTop: "30px",
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
              href="/products"
              startIcon={<ExploreIcon />}
            >
              Explore
            </Button>
          </Box>
        </Box>

        <HomeBannerProducts />

        <div className="home_section_banner">
          <div className="banner_images">
            <div className="banner_images_styling_one">
              <img
                src={BuySell}
                alt="Buy Sell banner"
                className="banner_image_one"
              />
            </div>

            <div className="banner_images_styling">
              <img
                src={happyCustomerImg}
                alt="Buy Sell banner"
                className="banner_image_two"
              />
            </div>
          </div>
          <div className="banner_content">
            <h1>About Us</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </span>
            <br />
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Find More
            </Button>
          </div>
        </div>

        <div className="home_shop_section">
          <div className="home_shop_section_heading">
            <span>SHOP</span>
          </div>

          <div className="home_shop_section_container">
            <Container className={classes.productContainer}>
              <Grid container spacing={4}>
                {cCards.map((card) => (
                  <Grid item key={card.title} md={3}>
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
          </div>
        </div>

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
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Home;
