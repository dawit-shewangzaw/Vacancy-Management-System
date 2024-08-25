// models/HR.js

module.exports = (sequelize, DataTypes) => {
    const HR = sequelize.define('HR', {
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
  
    return HR;
  };
  