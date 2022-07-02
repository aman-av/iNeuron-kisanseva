//Configuration of Local Strategy for authentication using Passport

const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('../models/usermodel')

module.exports = function (passport) {
    passport.use(
      new localStrategy((username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
              if (err) throw err;
              if (!user) return done(null, false,{message:'No user with that username'});
              bcrypt.compare(password, user.password, (err, result) => {
                  if (err) throw err;
                  if (result === true) {
                      return done(null, user);
                  } else {
                      return done(null, false, {message:'Password Incorrect'});
                  }
              });
            });
      })
    );

    passport.serializeUser((user, cb) => {
      cb(null, user.id);
    });
    
    passport.deserializeUser((id, cb) => {
      User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
              username: user.username,
            };
            cb(err, userInformation);
      });
    });
};