const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Notification = sequelize.define("Notification", {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM("unread", "read"), defaultValue: "unread" },
});

module.exports = Notification;
