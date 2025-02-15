const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('../models');

exports.register = (req, res) => {
  const { email, password, name } = req.body;
  User.findOne({ where: { email } }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = User.build({ email, password, name });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json(user);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.json({ message: 'Successfully logged out' });
};