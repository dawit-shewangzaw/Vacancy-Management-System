// models/Admin.js

module.exports = (sequelize, DataTypes) => {
    const Amdin = sequelize.define('Admin', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Admin;
  };
  