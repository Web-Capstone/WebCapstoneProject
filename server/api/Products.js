const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require("../models/Products");
mongoose.set("useFindAndModify", false);

// Get all the products
router.get("/", async (req, res, next) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

//Get a single products
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const singleProduct = await Products.findById(id);
    res.json(singleProduct);
  } catch (error) {
    console.log(error);
  }
});

// Post Add
router.post("/", async (req, res, next) => {
  try {
    const {
      productName,
      prouctTitle,
      productDescription,
      productImg,
      productRating,
      productPrice,
      productDetails,
    } = req.body;

    const result = await Products.create({
      productName,
      prouctTitle,
      productDescription,
      productImg,
      productRating,
      productPrice,
      productDetails,
    });

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
