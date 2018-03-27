'use strict';

const fs = require('fs');
const Models = require('../models');

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

    let data = fs.readFileSync('./teachers.csv','utf8').split('\r\n')

    let arrData = [];
    for (let i = 0; i < data.length; i++) {
      arrData.push(data[i].split(','))
    }
    
    let result = [];
    for(let i = 0; i < arrData.length; i++) {
      let newObj = {
        first_name: arrData[i][1],
        last_name: arrData[i][2],
        createdAt: new Date(),
        updatedAt: new Date(),
        email: arrData[i][3]
      }
      result.push(newObj);
    }

    return queryInterface.bulkInsert('Teachers', result, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    
    return queryInterface.bulkDelete('Teachers', null, {});
    
  }
};
