'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams', [
      {
        id: uuidv4(),
        name: 'Network',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Developement',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
