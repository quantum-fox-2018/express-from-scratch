const express = require('express')
let app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('something')
})

app.get('/school', (req, res) => {
  res.render('school', {heading: 'School Profile'})
})

app.get('/school', (req, res) => {
  res.send(req.body)
})

app.get('/register', (req, res) => {
  res.render('registration_form', {heading: 'Register'})
})

app.post('/register', (req, res) => {
  res.render('regis_success', req.body)
})

app.get('/teacher', (req, res) => {
  var arr = [{name: 'Sam', age: '50', subject: 'Science'}, {name: 'Tim', age: '60', subject: 'Chemistry'}]
  res.render('teacher', {teacher: arr})
})

app.get('/teacher', (req, res) => {
  res.send(req.body)
})

app.listen(3000)
