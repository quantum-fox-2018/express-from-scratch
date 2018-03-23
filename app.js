const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/student', function(req, res) {
  res.render('student-form');
});

app.post('/student', function(req, res) {
  res.render('student-data', {data: req.body});
  // console.log("--", req.body);
})

const teachers = [
  {
    name: "Teacher 1",
    age: 40
  },
  {
    name: "Teacher 2",
    age: 20
  },
  {
    name: "Teacher 3",
    age: 30
  },
  {
    name: "Teacher 4",
    age: 50
  },
  {
    name: "Teacher 5",
    age: 60
  }
];

app.get('/teachers', function(req, res) {
  res.render('teachers-data', {teachers: teachers})
})

app.listen(3000, () => {
  console.log("connected");
});
