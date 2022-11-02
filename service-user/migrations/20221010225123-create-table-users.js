'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      profession:{
        type: Sequelize.STRING,
        allowNull: true
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: true
      },
      role:{
        type: Sequelize.ENUM,
        values:['admin', 'operator'],
        defaultValue: 'operator',
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      pass:{
        type: Sequelize.STRING,
        allowNull: true
      },
      created_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: true
      },
    });
    await queryInterface.addConstraint('users',{
      type: 'unique',
      fields: ['email'],
      name: 'UNIQUE_USERS_EMAIL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
