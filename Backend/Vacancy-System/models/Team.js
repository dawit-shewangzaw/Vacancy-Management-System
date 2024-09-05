const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Team = sequelize.define('Team', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(), 
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true,
});

module.exports = Team;
