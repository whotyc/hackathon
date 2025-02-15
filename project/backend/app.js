const express = require('express');
const passport = require('passport');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();

// Passport configuration
require('./config/passport')(passport);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize,
  }),
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require('./routes/auth');
const heroRoutes = require('./routes/heroes');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/heroes', heroRoutes);
app.use('/api/users', userRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    return sequelize.sync();
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));

module.exports = app;