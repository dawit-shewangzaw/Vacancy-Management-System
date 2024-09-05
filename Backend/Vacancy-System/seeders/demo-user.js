'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch the UUIDs of the roles and teams after they have been inserted
    const [adminRole] = await queryInterface.sequelize.query(`SELECT id FROM "Roles" WHERE name = 'Admin';`);
    const [mangerRole] = await queryInterface.sequelize.query(`SELECT id FROM "Roles" WHERE name = 'Manger';`);
    const [teamLeaderRole] = await queryInterface.sequelize.query(`SELECT id FROM "Roles" WHERE name = 'Team Leader';`);
    const [hrRole] = await queryInterface.sequelize.query(`SELECT id FROM "Roles" WHERE name = 'HR';`);
    const [employeeRole] = await queryInterface.sequelize.query(`SELECT id FROM "Roles" WHERE name = 'Employee';`);
    
    const [networkTeam] = await queryInterface.sequelize.query(`SELECT id FROM "Teams" WHERE name = 'Network';`);
    const [devlopmentTeam] = await queryInterface.sequelize.query(`SELECT id FROM "Teams" WHERE name = 'Developement';`);

    const adminPassword = await bcrypt.hash('12341234', 10);
    
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        email: 'admin@gmail.com',
        password: adminPassword,
        roleId: adminRole[0].id, 
        teamId: networkTeam[0].id, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'manger@gmail.com',
        password: adminPassword,
        roleId: mangerRole[0].id, 
        teamId: devlopmentTeam[0].id, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'teamLeader@gmail.com',
        password: adminPassword,
        roleId: teamLeaderRole[0].id, 
        teamId: networkTeam[0].id, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'hr@gmail.com',
        password: adminPassword,
        roleId: hrRole[0].id, 
        teamId: devlopmentTeam[0].id, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: 'employee@gmail.com',
        password: adminPassword,
        roleId: employeeRole[0].id, 
        teamId: networkTeam[0].id, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
