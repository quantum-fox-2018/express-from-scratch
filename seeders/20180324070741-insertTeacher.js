'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Matt',
      last_name: 'Balmond',
      gender: 'male',
      birthday: '1978-12-24',
      email: 'matty@example.com',
      phone: '14045',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Lesley',
      last_name: 'Nurjannah',
      gender: 'female',
      birthday: '1977-01-29',
      email: 'lesley@example.com',
      phone: '100-008',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
