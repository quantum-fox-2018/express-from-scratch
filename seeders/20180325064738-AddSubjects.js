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
    
    let data = fs.readFileSync('./subjects.csv','utf8').split('\r\n')

    let arrData = [];
    for (let i = 0; i < data.length; i++) {
      arrData.push(data[i].split(','))
    }
    
    let result = [];
    for(let i = 0; i < arrData.length; i++) {
      let newObj = {
        subject_name: arrData[i][1],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      result.push(newObj);
    }

    return queryInterface.bulkInsert('Subjects', result, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    
    return queryInterface.bulkDelete('Subjects', null, {});

  }
};
