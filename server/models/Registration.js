const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};

const RegistrationSchema = new Schema({
  firstName: requiredString,
  lastName: requiredString,
  email: { type: String, required: true, unique: true, sparse: true },
  password: requiredString,
});

const Registration = mongoose.model("useregisters", RegistrationSchema); // model gives us methods like find,create
module.exports = Registration;
