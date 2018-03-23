'use strict'

const express = require ('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index')
})

app.get('/teachers', function(req, res){
  let arr = []
  arr.push({name: "richo", class:"A"})
  arr.push({name: "andy", class:"B"})
  arr.push({name: "bong", class:"C"})
  arr.push({name: "jovian", class:"D"})
  arr.push({name: "andrew", class:"E"})
  arr.push({name: "ihsan", class:"F"})
  arr.push({name: "maulana", class:"G"})
  arr.push({name: "dani", class:"H"})
  arr.push({name: "ramadani", class:"I"})
  arr.push({name: "hello", class:"J"})

  res.render('teachers', {teacherData: arr})
})

app.get('/student', function(req, res){
  res.render('addstudentform')
})

app.post('/student', function(req, res){
  let info = `${req.body.studentName} ${req.body.email}`
  res.send(info)
})

app.listen(3000)
