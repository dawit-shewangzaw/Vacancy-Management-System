'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HRs', [
      {
        email: 'firstHR@example.com',
        password: 'hr123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'secondHR@example.com',
        password: 'hr123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employee', null, {});
  }
};
