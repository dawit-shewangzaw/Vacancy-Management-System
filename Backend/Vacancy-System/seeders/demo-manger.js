'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Managers', [
        {
      email: 'firstdManger@example.com',
      password: 'mager123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'secondManger@example.com',
      password: 'manger123',
      createdAt: new Date(),
      updatedAt: new Date()   
    }
],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Managers', null, {});
  }
};
