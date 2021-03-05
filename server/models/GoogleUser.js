const mongoose = require("mongoose");

const { Schema } = mongoose;

const googleUserSchema = new Schema({
  googleUserID: String,
});

mongoose.model("googleusers", googleUserSchema);
