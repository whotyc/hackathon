const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
});

const User = require('./User')(sequelize, DataTypes);
const Hero = require('./Hero')(sequelize, DataTypes);

module.exports = {
  sequelize,
  User,
  Hero,
};