const express = require("express");
const Mongoose = require("mongoose");
const keys = require("./configuration/keys");
const sessionCookie = require("cookie-session");
const passport = require("passport");

//Environment Variables
require("dotenv").config();

const middlewares = require("./middlewares");

// app config
const app = express();

//connect to mongoose
const OPTS = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
Mongoose.connect(process.env.DATABASE_URL, OPTS)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

// api routes
app.get("/", (req, res) => {
  res.send({ start: "backend" });
});

//middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port} \n Server up and running`);
});
