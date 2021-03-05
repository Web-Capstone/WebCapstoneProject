const express = require("express");
const Mongoose = require("mongoose");
const keys = require("./configuration/keys");
const sessionCookie = require("cookie-session");
const passport = require("passport");

require("./models/GoogleUser");
require("./api/passport");

//Environment Variables
require("dotenv").config();

// Getting middlewares
const middlewares = require("./middlewares");

<<<<<<< HEAD
//Getting api
=======
// Getting api
>>>>>>> 408c56a6f4208d9dd40885d85321f248b17db0ca
const users = require("./api/Users");

// app config
const app = express();

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

app.use(express.json());

// api routes for Home Page
app.get("/", (req, res) => {
  res.send({ start: "backend" });
});

<<<<<<< HEAD
//api routes for other pages
app.get("/api/users", users);

app.use(
  sessionCookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./api/authenticationRoutes")(app);
=======
// api route for Other Pages
app.use("/api/users", users);
>>>>>>> 408c56a6f4208d9dd40885d85321f248b17db0ca

//middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT} \n Server up and running`);
});
