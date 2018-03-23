'use strict'

const express = require('express');
var bodyParser = require('body-parser')

let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(req, res){
    res.render('home');
})

app.post('/student', function(req, res){
   console.log(JSON.stringify(req.body));
})

app.get('/student', function(req, res){
    res.render('student');
})

app.get('/teachers', function(req, res){
    res.render('teachers', {name: 'Budi', gender: 'male'})
})

app.listen(3000);