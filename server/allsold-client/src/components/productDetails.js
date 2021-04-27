import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Material-ui
import { Button, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
//Components
import RelatedProductCards from "./RelatedProductCards";

import "../styles/productDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      left: 60,
    },
  },
}));

const ProductDetails = () => {
  const getSingleProduct = useSelector((state) => state.productsReducer);
  const { Singledata: data } = getSingleProduct;
  const getAllProducts = useSelector((state) => state.productsReducer.data);
  const classes = useStyles();
  const getExtraProducts = useSelector((state) => state.productsReducer);
  const { ExtraProductsdata } = getExtraProducts;

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
                Brand: <span>loreum</span>
              </h2>
            </div>
            <div className="product_description">
              <h1 className="heading">Description</h1>
              <h2 className="description_info">{data?.productDescription}</h2>
            </div>
          </div>
          <div className="related_ads">
            <h1>Related ads</h1>
            {getAllProducts
              ? getAllProducts.map((Edata) => (
                  <RelatedProductCards
                    key={Edata._id}
                    productId={Edata._id}
                    productDescription={Edata.productDescription}
                    productTitle={Edata.prouctTitle}
                    productImg={Edata.productImg}
                    productPrice={Edata.productPrice}
                    productName={Edata.productName}
                  />
                ))
              : null}
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
            <div className="product_info_others">
              <h2>location</h2>
              <h3>Date</h3>
            </div>
          </div>
          <div className="seller_info">
            <h1 className="seller_info_heading">Seller Description</h1>
            <div className="seller_details">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to{" "}
            </div>
            <Button
              variant="contained"
              color="primary"
              className="chat_with_seller_button"
            >
              Chat with seller
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="chat_with_seller_button"
            >
              Contact Seller
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
