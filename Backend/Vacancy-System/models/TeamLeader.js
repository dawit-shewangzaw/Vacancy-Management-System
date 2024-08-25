// models/TeamLeader.js

module.exports = (sequelize, DataTypes) => {
    const TeamLeader = sequelize.define('TeamLeader', {
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
  
    return TeamLeader;
  };
  