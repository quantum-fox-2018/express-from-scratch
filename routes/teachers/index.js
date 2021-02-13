const express = require('express');
const teachers = express.Router();
const data = require('../../data_teacher.json')

teachers.get('/', (req, res) => {
    res.render('teachers_data', { data })
})

module.exports = teachers;
