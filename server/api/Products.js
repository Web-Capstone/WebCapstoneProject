const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require("../models/Products");
mongoose.set("useFindAndModify", false);

// Show all the products
router.get("/", async (req, res, next) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
