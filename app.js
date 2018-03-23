const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', function(req, res){
  res.render('index')
})

app.get('/student', function(req, res){
  res.render('student')
})

app.post('/student_input_result', function(req, res){
  // console.log(req.body);
  res.render('student_input_result', {student: req.body})
})

app.get('/teachers', function(req, res){
  res.render('teachers')
})





app.listen(3000);
