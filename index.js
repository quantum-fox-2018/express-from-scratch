'use strict'

const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('I love Hacktiv8')
});

app.get('/student', (req, res) => {
  res.render('student_form', {title: 'Form Student'})
});

// Turn on server
app.listen(3000);
