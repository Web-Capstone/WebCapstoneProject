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

Mongoose.connect(keys.mongoURI);

app.use(express.json());

// api routes
app.get("/", (req, res) => {
  res.send({ start: "backend" });
});

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
  console.log(`Listening at http://localhost:${port} \n Server up and running`);
});
