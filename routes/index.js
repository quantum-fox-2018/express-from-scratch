const routes    = require('express').Router();
const students  = require('./students');
const teachers  = require('./teachers');

routes.get('/', (req, res) => {
  res.render('index');
});

routes.use('/students', students);
routes.use('/teachers', teachers);

module.exports = routes;
