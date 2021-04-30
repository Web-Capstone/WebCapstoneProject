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
  productName: String,
  prouctTitle: String,
  productDescription: String,
  productImg: String,
  productRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 3,
  },
  productPrice: requiredNumber,
  productDetails: String,
  productCategory: { type: String, default: "" },
  productCarBrand: String,
  productCarYear: String,
  productCarFuelType: String,
  productCarTransmission: String,
  productCarKm: Number,
  productCarNumberOfOwners: Number,
  sellerNumber: Number,
  sellerName: String,
  sellerEmail: String,
});

const Products = mongoose.model("products", ProductSchema); // model gives us methods like find,create
module.exports = Products;
