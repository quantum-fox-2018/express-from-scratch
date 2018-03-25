'use strict'
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send('I love Hacktiv8!')
});

app.get('/student', function(req, res) {
  res.render('student_form', {title: 'Form Student'})
});

app.post('/student', function(req, res) {
  res.render('student_data', {student: req.body})
})

let teacher_data = [{
    firstname: 'John',
    lastname: 'Doe',
    age: 51,
    email: 'johndoe@gmail.com'
  },{
    firstname: 'Artour',
    lastname: 'Babaev',
    age: 21,
    email: 'artour322@gmail.com'
  },{
    firstname: 'Clinton',
    lastname: 'Loomis',
    age: 27,
    email: 'clintonfear1@gmail.com'
  }
];

app.get('/teachers', function(req, res) {
  res.render('teacher_data', {teachers: teacher_data})
})

// Turn on server
app.listen(3000, () => {
  console.log('Status: Connected to port:3000...');
});
