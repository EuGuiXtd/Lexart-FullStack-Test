'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: 
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      details: 
      {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      brand: 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
      model: 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data: 
      {
        type: Sequelize.ARRAY(Sequelize.JSONB),
        allowNull: true,
      },
      price: 
      {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      color: 
      {
        type: Sequelize.STRING,
        allowNull: true,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
