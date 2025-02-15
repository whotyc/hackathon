module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};