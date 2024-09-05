const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Role = require('./Role');
const Team = require('./Team');

// Sync the models with the database
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(error => console.error('Error creating database & tables:', error));

module.exports = {
    User,
    Role,
    Team,
};
