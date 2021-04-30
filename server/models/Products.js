const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const ProductSchema = new Schema({
  productName: requiredString,
  prouctTitle: requiredString,
  productDescription: String,
  productImg: requiredString,
  productRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 3,
  },
  productPrice: requiredNumber,
  productDetails: String,
  productCategory: String,
});

const Products = mongoose.model("products", ProductSchema); // model gives us methods like find,create
module.exports = Products;
