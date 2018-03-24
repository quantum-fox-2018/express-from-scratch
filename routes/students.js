const {Student} = require('../models')
module.exports = (function(){
  const routes = require('express').Router()

  routes.get('/',function(req,res){
    Student.findAll({
      order : [['id','ASC']]
    }).then(data=>{
      res.render('viewStudents.ejs',{data})
    })
  })

  routes.get('/add',function(req,res){
    res.render('formAddStudent.ejs',{data_error:req.query})
  })

  routes.post('/add',function(req,res){
    let obj = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      gender : req.body.gender,
      birthday : req.body.birthday,
      email : req.body.email,
      phone : req.body.phone,
      height : req.body.height,
    }

    Student.create(obj).then(data=>{
      res.redirect('/students')
    }).catch(err=>{
      res.redirect(`/students/add?error=${err.message}`)
    })
  })

  return routes
})()
