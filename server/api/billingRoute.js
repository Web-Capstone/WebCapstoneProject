const key = require("../configuration/keys");
const stripe = require("stripe")(key.stripeSKey);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 1500,
      currency: "usd",
      description: "ProSeller plan",
      source: req.body.id,
    });
    console.log(charge);
  });
};
