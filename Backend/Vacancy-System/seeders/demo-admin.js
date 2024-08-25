'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert an admin user into the appropriate table based on role
    await queryInterface.bulkInsert('Admins', [
      {
        email: 'firstAdmin@example.com',
        password: 'admin123', // Ensure you use hashed passwords in production
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'secondAdmin@example.com',
        password: 'admin123', // Ensure you use hashed passwords in production
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove the admin user if rolling back
    await queryInterface.bulkDelete('Admins', null, {});
  }
};
