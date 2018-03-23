const express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('I love Hacktiv8!');
})

app.get('/teachers', (req, res) => {
    let arrTeachers = [{
            name: 'ihsan',
            subject: 'physics'
        },
        {
            name: 'faldhi',
            subject: 'arts'
        },
        {
            name: 'dani',
            subject: 'geologi'
        },
        {
            name: 'rama',
            subject: 'chemistry'
        },
        {
            name: 'fandy',
            subject: 'biologi'
        },
        {
            name: 'cihuyman',
            subject: 'science'
        },
        {
            name: 'neil',
            subject: 'math'
        }
    ];

    res.render('teachers', {dataTeachers: arrTeachers});
})

app.get('/students', function(req, res){
    res.render('add-student')
  })
  
  app.post('/students', function(req, res){
    let info = `${req.body.name}<br>${req.body.email}<br>${req.body.hoby}`
    res.send(info)
  })


app.listen(3000);