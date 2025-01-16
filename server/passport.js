
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/User");
require("dotenv").config();

// Serialize the user into the session
passport.serializeUser((user, done) => {
    console.log(user)
  done(null, user.id); // Only store the user ID in the session
});

// Deserialize the user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Retrieve the full user object
  } catch (err) {
    done(err, null);
  }
});

// Configure the Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.CALL_BACK}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
          });
        }
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
