const express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine","ejs")
app.get('/', function(req, res){
  res.send("I love Hacktiv8")
})

app.get('/student_form', function(req,res){
  res.render('student_form')
})

app.get('/success_submit', function(req,res){
  res.render('success_submit')
})

app.post('/success_submit', function(req,res){
  res.render('success_submit')
})

app.get('/teacher', function(req,res){
  res.render('teacher')
})

app.listen(3000)
