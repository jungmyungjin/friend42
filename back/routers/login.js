const passport = require("passport");
const FortyTwoStrategy = require("passport-42").Strategy;
const { createUser } = require("./controller");
const Friend42 = require("../models/useModel");

module.exports = () => {
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });
  passport.use(
    new FortyTwoStrategy(
      {
        clientID: process.env.APP_ID,
        clientSecret: process.env.APP_SECRET,
        callbackURL: "https://localhost:8080/42/callback",
        passReqToCallback: true,
      },
      (req, accessToken, refreshToken, profile, cb) => {
        Friend42.findOne({ id: profile.id }, (err, user) => {
          if (user) {
            return cb(err, user);
          }
          const newUser = new Friend42({
            id: profile.id,
            name: profile.name,
          });
          newUser.save((user) => {
            return cb(null, user);
          });
        });
        req.session.accessToken = accessToken;
        console.log("accessToken", accessToken, "refreshToken", refreshToken);
        return cb(null, profile);
      }
    )
  );
};

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
