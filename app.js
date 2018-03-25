/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index.ejs');
});

app.get('/student',function(req,res){
  res.render('student-form.ejs');
});

app.post('/student', function(req, res) {
  res.render('student-data', {data: req.body});
});

app.get('/teachers',function(req,res){
  let dataTeachers = [{
    No:1,
    first_name : "Andrew",
    last_name : "Wommack",
    gender : "male",
    academic_subject: "Fundanmental of Grace"
  },{
    No:2,
    first_name : "Jammy",
    last_name : "Gracies",
    gender : "female",
    academic_subject: "Living of Garce"
  },{
    No:3,
    first_name : "Paul",
    last_name : "Milligan",
    gender : "male",
    academic_subject: "Spirit, Soul and Body"
  },{
    No:4,
    first_name : "Sharon",
    last_name : "Rich",
    gender : "female",
    academic_subject: "Pray and Worship"
  },{
    No:5,
    first_name : "Barry",
    last_name : "Burns",
    gender : "male",
    academic_subject: "Finnancial of Grace"
  }];
  res.render("teacher-data.ejs",{dataTeachers});
});

app.listen(3000, () => {
  console.log("connected");
});
