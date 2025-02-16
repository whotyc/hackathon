const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("memorial_db", "username", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
