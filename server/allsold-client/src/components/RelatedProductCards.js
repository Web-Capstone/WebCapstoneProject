import React from "react";
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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";

// css
import "../styles/RelatedProductCards.css";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "80%",
  //   display: "flex",
  //   alignItems: "center",
  //   backgroundColor: "whitesmoke",
  // },
  // card: {
  //   height: "auto",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // cardMedia: { paddingTop: "56.25%" },
  // cardContent: {
  //   flexGrow: 1,
  // },
}));

function RelatedProductCards({
  productId,
  productImg,
  productTitle,
  productDescription,
  productPrice,
  productName,
}) {
  const classes = useStyles();
  return (
    <div className="related_products_card">
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
            <Typography> ${productDescription}</Typography>
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

export default RelatedProductCards;
