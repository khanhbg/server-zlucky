'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      hight: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      cccd: {
        type: Sequelize.STRING
      },
      permanentAddress: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      teamporaryRecidence: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      zalo: {
        type: Sequelize.STRING
      },
      other: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      income: {
        type: Sequelize.INTEGER
      },
      education: {
        type: Sequelize.STRING
      },
      hobbies: {
        type: Sequelize.STRING
      },
      marriage: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      motherName: {
        type: Sequelize.STRING
      },
      brotherName: {
        type: Sequelize.STRING
      },
      sisterName: {
        type: Sequelize.STRING
      },
      fatherPhoneNumber: {
        type: Sequelize.STRING
      },
      motherPhoneNumber: {
        type: Sequelize.STRING
      },
      brotherPhoneNumber: {
        type: Sequelize.STRING
      },
      sisterPhoneNumber: {
        type: Sequelize.STRING
      },
      numberChildren: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      gameNumber: {
        type: Sequelize.INTEGER
      },
      gameNumberVip: {
        type: Sequelize.INTEGER
      },
      numberLogin: {
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
    await queryInterface.dropTable('user');
  }
};