'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id:{
        allowNull: false,    
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTERGER    
      },
      name: {
        type: Sequelize.String,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      available_start_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bands');
  }
};