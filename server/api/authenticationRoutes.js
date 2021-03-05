const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/oauth20/google/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/oauth20/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/oauth20/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
