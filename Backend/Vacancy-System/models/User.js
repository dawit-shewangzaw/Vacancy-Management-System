const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');
const Team = require('./Team');
const { v4: uuidv4 } = require('uuid'); 

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.STRING,
        references: {
            model: Role,
            key: 'id',
        },
    },
    teamId: {
        type: DataTypes.STRING,
        references: {
            model: Team,
            key: 'id',
        },
        allowNull: true,
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,  
    },
    resetPasswordExpires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    timestamps: true,
});

User.belongsTo(Role, { foreignKey: 'roleId' });
User.belongsTo(Team, { foreignKey: 'teamId' });

module.exports = User;
