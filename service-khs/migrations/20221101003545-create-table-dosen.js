'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dosen', {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nip : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
      nama_dosen : {
        type : Sequelize.INTEGER,
        allowNull: false,
      },
      tgl_lahir : {
        type : Sequelize.STRING,
        allowNull : false
      },
      alamat : {
        type : Sequelize.STRING,
        allowNull : true
      },
      no_hp : {
        type : Sequelize.INTEGER,
        allowNull : true
      },
    });
    await queryInterface.addConstraint('dosen',{
      type : 'unique',
      fields : ['nip'],
      name : 'UNIQUE_DOSEN_NIP'
    });
  },

  down : async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dosen');
  }
};
