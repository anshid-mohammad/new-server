const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

passport.serializeUser((user, done) => {
	done(null, user);
})
passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID:"863569066498-06erf72473mnf8l97can1h2d7oc7vnkr.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
	function (request, accessToken, refreshToken, profile, done) {
		return done(null, profile);
	}
));



