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

//Update a Product
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;

  var newObject = {
    productName: req.body.productName,
    prouctTitle: req.body.prouctTitle,
    productDescription: req.body.productDescription,
    productImg: req.body.productImg,
    productRating: req.body.productRating,
    productPrice: req.body.productPrice,
    productDetails: req.body.productDetails,
    productCategory: req.body.productCategory,
  };
  try {
    const updateProduct = await Products.findByIdAndUpdate(
      id,
      newObject,
      function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Done" });
      }
    );
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
      productCarBrand,
      productCarYear,
      productCarFuelType,
      productCarTransmission,
      productCarKm,
      productCarNumberOfOwners,
    } = req.body;

    const result = await Products.create({
      productName,
      prouctTitle,
      productDescription,
      productImg,
      productRating,
      productPrice,
      productDetails,
      productCarBrand,
      productCarYear,
      productCarFuelType,
      productCarTransmission,
      productCarKm,
      productCarNumberOfOwners,
    });

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
