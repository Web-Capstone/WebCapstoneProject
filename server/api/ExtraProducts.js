const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ExtraProducts = require("../models/ExtraProducts");
mongoose.set("useFindAndModify", false);

// Show all the products
router.get("/", async (req, res, next) => {
  try {
    const products = await ExtraProducts.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
