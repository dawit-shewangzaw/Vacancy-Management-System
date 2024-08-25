'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      university: {
        type: Sequelize.STRING
      },
      fieldOfStudy: {
        type: Sequelize.STRING
      },
      cgpa: {
        type: Sequelize.FLOAT
      },
      yearOfExperience: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM
      },
      coverLetter: {
        type: Sequelize.TEXT
      },
      cv: {
        type: Sequelize.STRING
      },
      vacancyId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Applications');
  }
};