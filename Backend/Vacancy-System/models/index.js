// models/index.js

const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Employee = require('./Employee')(sequelize, Sequelize);
db.HR = require('./HR')(sequelize, Sequelize);
db.Manager = require('./Manager')(sequelize, Sequelize);
db.TeamLeader = require('./TeamLeader')(sequelize, Sequelize);
db.TeamLeader = require('./Admin')(sequelize, Sequelize);

// Export the db object
module.exports = db;
