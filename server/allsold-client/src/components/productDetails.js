import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Material-ui
import { Button, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

//Components
import RelatedProductCards from "./RelatedProductCards";
import ProductCard from "./ProductCard";

import "../styles/productDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      left: 60,
    },
  },
  sellerInfo: {
    fontSize: "1.3rem",
    fontWeight: "bolder",
  },

  sellerInfoData: {
    fontWeight: "500",
    marginLeft: "10px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetails = () => {
  const [open, setOpen] = React.useState(false);
  const getSingleProduct = useSelector((state) => state.productsReducer);
  const { Singledata: data } = getSingleProduct;
  const getAllProducts = useSelector((state) => state.productsReducer.data);
  const getRelatedProducts = getAllProducts?.filter(
    (c) => c.productCategory === "recommended"
  );
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="product_details">
        <div className="product_details_left">
          <div className="product_img">
            <img
              src={data?.productImg}
              height="100%"
              width="100%"
              alt="Product image"
            />
          </div>
          <div className="product_description_box">
            <div className="product_description_details">
              <h1 className="heading">Details</h1>
              <h2 className="details_info">
                <div>
                  {data?.productCarBrand ? (
                    <span>Brand - {data?.productCarBrand} </span>
                  ) : null}
                </div>
                <div>
                  {data?.productCarYear ? (
                    <span>Year - {data?.productCarYear} </span>
                  ) : null}
                </div>
                <div>
                  {data?.productCarFuelType ? (
                    <span>Fuel Type - {data?.productCarFuelType} </span>
                  ) : null}
                </div>
                <div>
                  {data?.productCarTransmission ? (
                    <span>
                      Car Transmission - {data?.productCarTransmission}{" "}
                    </span>
                  ) : null}
                </div>
                <div>
                  {data?.productCarKm ? (
                    <span>Car Km - {data?.productCarKm} </span>
                  ) : null}
                </div>
              </h2>
            </div>
            <div className="product_description">
              <h1 className="heading">Description</h1>
              <h2 className="description_info">{data?.productDescription}</h2>
            </div>
          </div>
        </div>
        <div className="product_details_right">
          <div className="product_info">
            <div className="product_info_price">
              <h2 className="price_info">
                $ <span>{data?.productPrice}</span>
              </h2>
              <span className="social_icons">
                <IconButton>
                  <ShareIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </span>
            </div>
            <div className="product_info_tagline">
              <h2>{data?.prouctTitle}</h2>
            </div>
          </div>
          <div className="seller_info">
            <h1 className="seller_info_heading">About Seller</h1>
            <div className="seller_details">
              <div>
                Name: <span>{data?.sellerName}</span>
              </div>
            </div>

            <Button
              variant="contained"
              color="primary"
              className="chat_with_seller_button"
              onClick={handleClickOpen}
            >
              Contact Seller
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                Contact Seller
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <div className={classes.sellerInfo}>
                    Seller Number
                    <span className={classes.sellerInfoData}>
                      {data?.sellerNumber}
                    </span>
                  </div>

                  <br />
                  <div className={classes.sellerInfo}>
                    Seller Email
                    <span className={classes.sellerInfoData}>
                      {data?.sellerEmail}
                    </span>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
