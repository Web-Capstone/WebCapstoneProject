const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
};

const RegistrationSchema = new Schema({
  FirstName: requiredString,
  LastName: requiredString,
  Email: { type: String, required: true, unique: true },
  Password: requiredString,
});

const Registration = mongoose.model("useregisters", RegistrationSchema); // model gives us methods like find,create
module.exports = Registration;
