// models/Employee.js

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
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
  
    return Employee;
  };
  