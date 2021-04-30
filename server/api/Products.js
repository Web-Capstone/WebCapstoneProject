const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require("../models/Products");
mongoose.set("useFindAndModify", false);
const multer = require("multer");
const upload = multer();
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

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
      sellerNumber,
      sellerName,
      sellerEmail,
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
      sellerNumber,
      sellerName,
      sellerEmail,
    });

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
});

router.post("/uploads", upload.single("file"), async function (req, res, next) {
  const { file } = req;

  console.log(file);
  const fileName =
    Math.floor(Math.random() * 1000) + file.detectedFileExtension;

  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/..images/${file}`)
  );

  res.send("file upoaded as");
});

module.exports = router;
