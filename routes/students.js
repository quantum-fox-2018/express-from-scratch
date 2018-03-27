const express = require('express');
const Models = require('../models');

let routes = express.Router();

routes.get('/', function(req,res) {
    Models.Student.findAll()
    .then(students => {
        let obj = {
            title:'List Students',
            arrStudents: students
        }
        res.render('student/stu_list.ejs',obj)
    })
    .catch(err => {
        res.send(err);
    })
})


routes.get('/add', function(req,res) {
    let obj = {
        title: 'Add Student Data'
    }
    res.render('student/stu_form.ejs',obj)
})


routes.post('/add', function(req,res) {
    let newData = req.body;

    Models.Student.create(newData)
    .then(student => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/edit/:id', function(req,res) {
    let id = req.params.id;

    Models.Student.findById(id)
    .then(student => {
        let obj = {
            title: 'Edit Student Data',
            student: student
        }
        res.render('student/stu_edit.ejs',obj)    
    })
})

routes.post('/edit/:id', function(req,res) {
    let id = req.params.id;
    let newData = req.body;

    Models.Student.update(newData, {where: {id: id}})
    .then(() => {
        // console.log(this);
        res.redirect('/students');
    })
    .catch(err => {
        res.send(err);
    })
})


routes.get('/delete/:id', function(req,res) {
    let id = req.params.id
    // let result = confirm('Delete this student?');
    // if(result) {
        Models.Student.destroy({where: {id:id}})
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err);
        })
    // }
})




// routes.post('/', function(req,res) {
    // console.log(req.body)
    // res.send(req.body)
// })

module.exports = routes