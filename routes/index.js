let express = require('express');
let router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res){
    // res.send('I Love Hacktiv8')
    res.render('home.ejs')
})

router.get('/students', function(req, res){
    let obj = {
        title: 'Form Input data Student',
        description: 'input data student dibawah ini dengan benar :'
    };
    res.render('student.ejs', obj)
})

router.post('/students', function(req, res){
    let obj = {
        name: req.body.name,
        birth: req.body.birth,
        gender: req.body.gender
    };
    res.send(obj)
})

router.get('/teachers', function(req, res){
    let obj = {};
    res.render('teacher.ejs', obj)
})

module.exports = router;