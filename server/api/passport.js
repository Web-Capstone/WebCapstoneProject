const passport = require("passport");
const GoogleAuthStrategy = require("passport-google-oauth20").Strategy;

const mongoose = require("mongoose");

const keys = require("../configuration/keys");

const GoogleUser = mongoose.model("googleusers");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  GoogleUser.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleAuthStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/oauth20/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const userExists = await GoogleUser.findOne({ googleUserID: profile.id });

      if (userExists) {
        done(null, userExists);
      } else {
        const googleUser = await new GoogleUser({
          googleUserID: profile.id,
        }).save();
        done(null, googleUser);
      }
    }
  )
);
