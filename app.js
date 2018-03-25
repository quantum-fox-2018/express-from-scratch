const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send("I love u")
})

app.get('/student', (req, res) => {
  res.render('student', {title: "students form"})
})

app.post('/studentResult', (req, res) => {
  res.render('studentResult', {data: req.body})
})

var teacherList = [
    {name:'Budi',subject:'Math'},
    {name:'Jono',subject:'History'},
    {name:'Margono',subject:'Magic'}
]

app.get('/teacher', (req, res) => {
  res.render('teacher',{teacherList})
})
//
// app.get('/teachers', (req, res) => {
//
// })

app.listen(3000)
