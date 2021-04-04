'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'catalogs', 
      'path',
      Sequelize.STRING
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'catalogs',
      'path'
      );
  }
};
