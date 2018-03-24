module.exports = (function(){
  const routes = require('express').Router()
  const students = require('./students')
  const teachers = require('./teachers')

  routes.use('/students',students)
  routes.use('/teachers',teachers)

  routes.get('/',function(req,res) {
    res.render('index',{})
  })
  return routes
})();
