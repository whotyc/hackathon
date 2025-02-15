module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deathDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    conflicts: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    awards: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    burialPlace: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortBio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Hero;
};