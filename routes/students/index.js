const express = require('express');
const students = express.Router();

students.get('/', (req, res) => {
    res.render('student_form', {title: 'Form Student'})
})

students.post('/submit', (req, res) => {
  res.render('student_data', {student: req.body})
})

module.exports = students;
