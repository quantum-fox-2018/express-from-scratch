const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('home')
})

routes.get('/students', (req, res) => {
  res.render('student')
})

routes.post('/students', (req, res) => {
  res.render('submit', {data: req.body})
})

routes.get('/teachers', (req, res) => {
  let teachers = [
    {name: 'Agung'},
    {name: 'Eki'},
    {name: 'Yosa'},
    {name: 'Fitrul'},
    {name: 'Bastian'},
    {name: 'Wika'},
  ]
  res.render('teacher', {data: teachers})
})

module.exports = routes