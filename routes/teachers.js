const express = require('express');
let routes = express.Router();

routes.get('/', function(req,res) {
    res.send('Ini teacher !');
})

module.exports = routes