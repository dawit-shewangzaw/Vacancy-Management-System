'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    place: DataTypes.STRING,
    responsibility: DataTypes.TEXT,
    requirementQualification: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};