// models/Manager.js

module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
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
  
    return Manager;
  };
  