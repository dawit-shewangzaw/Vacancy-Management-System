const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vacancy = sequelize.define('Vacancy', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibility: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requirementQualification: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Vacancy;
