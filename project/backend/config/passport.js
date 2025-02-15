const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../models');

// Local Strategy
module.exports = function(passport) {
  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      User.findOne({ where: { email } }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Email not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      }).catch(err => console.log(err));
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id).then(user => {
      done(null, user);
    }).catch(err => done(err, null));
  });
};