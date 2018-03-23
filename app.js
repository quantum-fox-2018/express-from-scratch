const ejs = require('ejs')
const express = require('express');
let app = express()

app.set('view engine','ejs')

app.get('/', function(req, res){
  // res.send('profile sekolah')
  res.render('profileSekolah',{title: 'ini profile sekolah'})
})

app.get('/student', function(req, res){
  // res.send('ini page student')
  res.render('student',{title: 'ini profile sekolah'})
})

app.post('/action_page',function(req, res){
  res.send('submit berhasil')
})


app.get('/teachers', function(req, res){
  res.send('ini page teachers')
})
app.listen(3000)
