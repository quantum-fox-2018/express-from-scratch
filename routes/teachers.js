const {Teacher} = require('../models')
module.exports = (function(){
  const routes = require('express').Router()

  routes.get('/',function(req,res){
    Teacher.findAll({
      order : [['id','ASC']]
    }).then(data=>{
      res.render('viewTeachers.ejs',{data})
    })
  })

  return routes
})()
