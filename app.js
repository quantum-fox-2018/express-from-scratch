'use strict'
const express = require('express')
let app = express()
var http=require('http');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

app.set('view engine','ejs')
app.get('/',function(req,res){
  res.render('index.ejs')
})
app.get('/students',function(req,res){
  res.render('students.ejs')
})
app.post('/student', function(req, res){
  let student = `name : ${req.body.studentName} '\n'gender : ${req.body.gender} '\n'birthdate : ${req.body.birthdate} '\n' registered successfuly`
  res.send(student)
})
app.get('/teachers',function(req,res){
  let dataTeachers = [{
    No:1,
    first_name : "Udin",
    last_name : "Jampang",
    gender : "male",
    academic_subject: "Pencak Silat"
  },{
    No:2,
    first_name : "Royce",
    last_name : "Gracie",
    gender : "male",
    academic_subject: "Brazilian Jiu-Jitsu"
  },{
    No:3,
    first_name : "Ronda",
    last_name : "Rousey",
    gender : "female",
    academic_subject: "Judo"
  },{
    No:4,
    first_name : "Conor",
    last_name : "McGregor",
    gender : "male",
    academic_subject: "Boxing"
  },{
    No:5,
    first_name : "Dwayne",
    last_name : "johnson",
    gender : "male",
    academic_subject: "Wrestling"
  }]
  res.render("teacher.ejs",{dataTeachers})
})
app.listen(3185);
