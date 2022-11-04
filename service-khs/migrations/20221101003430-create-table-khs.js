'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable("khs", {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_mk:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dosen_id :{
        type : Sequelize.INTEGER,
        allowNull: false
      },
      tahun_ajaran:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      semester:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      jadwal:{
        type: Sequelize.STRING,
        allowNull: true
      },
    });
    // await queryInterface.addConstraint('khs',{
    //   type: 'foreign key',
    //   name: 'NIP_DOSEN_FOR_TABLE_DOSEN',
    //   fields: ['dosen_id'],
    //   references: {
    //     table: 'dosen',
    //     field: 'id'
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE'
    // });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("khs");
  }
};

