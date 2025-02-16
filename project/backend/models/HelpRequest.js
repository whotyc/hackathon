module.exports = (sequelize, DataTypes) => {
    const HelpRequest = sequelize.define('HelpRequest', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      reason: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    return HelpRequest;
  };