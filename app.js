var express = require('express')
const bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/studentForm', (req, res) =>{
    res.render('studentForm') 
})

app.post('/studentResult', (req, res) => {
    res.render('studentResult',{dataStudent: req.body})
})

var teachersList = [
    {name:'Budi',subject:'Math'},
    {name:'Jono',subject:'History'},
    {name:'Margono',subject:'Magic'}
]

app.get('/teacherList', (req, res) => {
    res.render('teacherList',{teachersList})
})
app.listen(3000)