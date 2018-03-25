const routes    = require('express').Router();
const students  = require('./students');
const teachers  = require('./teachers');

routes.get('/', (req, res) => {
  res.send('I love Hacktiv8!')
});

routes.use('/students', students);
routes.use('/teachers', teachers);

module.exports = routes;
