const express = require('express');
let routes = express.Router();

routes.get('/', function(req,res) {
    res.send(`Selamat datang di SMA Desa Hutan ! Ini sekolah terbaik ada di dunia !`);
})

routes.use('/students', require('./students.js'))
routes.use('/teachers', require('./teachers.js'))
routes.use('/subjects', require('./subjects.js'))


module.exports = routes
