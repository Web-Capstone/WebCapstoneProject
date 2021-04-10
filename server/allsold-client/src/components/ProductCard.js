import React from "react";
// css
import "../styles/productCard.css";
import "../styles/home.css";
// Material Ui
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
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";

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
}));

function ProductCard({
  productId,
  productImg,
  productTitle,
  productDescription,
  productPrice,
  productName,
}) {
  const classes = useStyles();

  return (
    <div className="product_card">
      <Grid xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={productImg}
            title="image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              {productTitle}
            </Typography>
            <Typography>{productDescription}</Typography>
            <Typography className="product_card_price">
              ${productPrice}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              className="product_card_favourirte_button"
            >
              <FavoriteBorderIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default ProductCard;
