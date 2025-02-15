const { User } = require('../models');

exports.updateUser = (req, res) => {
  User.update(req.body, { where: { id: req.user.id } }).then(user => res.json(user));
};

exports.getUser = (req, res) => {
  User.findByPk(req.user.id).then(user => res.json(user));
};