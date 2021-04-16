const express = require("express");
const Mongoose = require("mongoose");
const keys = require("./configuration/keys");
const sessionCookie = require("cookie-session");
const passport = require("passport");
const cors = require("cors"); // For Cross Origin

require("./models/GoogleUser");
require("./api/passport");

//Environment Variables
require("dotenv").config();

// Getting middlewares
const middlewares = require("./middlewares");

// app config
const app = express();

//Getting api
const users = require("./api/Users");
const products = require("./api/Products");
const extraProducts = require("./api/ExtraProducts");

//Connect to mongoose
const OPTS = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
Mongoose.connect(process.env.DATABASE_URL, OPTS)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

Mongoose.connect(keys.mongoURI);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());

// api routes for Home Page
app.get("/", (req, res) => {
  res.send({ start: "backend" });
});

//api routes for other pages
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/extraProducts", extraProducts);

app.use(
  sessionCookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./api/authenticationRoutes")(app);

//middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT} \n Server up and running`);
});
