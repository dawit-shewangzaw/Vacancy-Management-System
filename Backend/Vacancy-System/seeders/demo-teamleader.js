'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TeamLeaders', [
        {
      email: 'firstTeamLeader@example.com',
      password: 'leader123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'secondTeamLeader@example.com',
      password: 'leader123',
      createdAt: new Date(),
      updatedAt: new Date()   
    }
],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TeamLeaders', null, {});
  }
};
