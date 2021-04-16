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
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { getSingleProduct } from "../actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(getSingleProduct(history, id));
  };

  return (
    <div className="product_card" onClick={() => onClick(productId)}>
      <Grid>
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
