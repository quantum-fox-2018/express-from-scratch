const express = require('express');
let routes = express.Router();

routes.get('/', function(req,res) {
    // res.send('Ini students !');
    res.render('s_form.ejs')    
})


routes.post('/', function(req,res) {
    // console.log(req.body)
    res.send(req.body)
    
})

module.exports = routes