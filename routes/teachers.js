const express = require('express');
let routes = express.Router();
let Models = require('../models');


routes.get('/', function(req,res) {
    // res.send('Ini teacher !');
    Models.Teacher.findAll({include: [{model: Models.Subject}]})
    .then(teachers => {
        // res.send(teachers);
        let obj = {
            title: 'All Teachers Data',
            arrTeachers: teachers
        }
        // res.send(teachers);
        res.render('teacher/tea_list.ejs',obj)
    })
})


routes.get('/add', function(req,res) {
    let obj = {
        title: 'Add Teacher Data',
        error: req.query.err
    }
    res.render('teacher/tea_form.ejs',obj)
})

routes.post('/add', function(req,res) {
    let newData = req.body;
    // res.send(newData);

    Models.Teacher.create(newData)
    .then(teacher => {
        res.redirect('/teachers');
    })
    .catch(err => {
        // console.log(err);
        res.redirect(`/teachers/add?err=${err.message}`)
    })
})

routes.get('/edit/:id', function(req,res) {
    let id = req.params.id;

    Models.Teacher.findById(id)
    .then(teacher => {
        let obj = {
            title: 'Edit Student Data',
            teacher: teacher,
            error: req.query.err
        }
        // res.send(teacher);
        res.render('teacher/tea_edit.ejs',obj)
    })
})


routes.post('/edit/:id', function(req,res) {
    let id = req.params.id;
    let newData = req.body;

    Models.Teacher.update(newData, {where: {id: id}})
    .then(teacher => {
        // res.send(teacher);
        res.redirect('/teachers');
    })
    .catch(err => {
        res.redirect(`/teachers/edit/${id}?err=${err.message}`)
        // console.log(err);
    })
})


routes.get('/delete/:id', function(req,res) {
    let id = req.params.id;
    
    Models.Teacher.destroy({where: {id: id}})
    .then(teacher => {
        // res.send(teacher);
        res.redirect('/teachers');
    })
    .catch(err => {
        console.log(err);
    })

})




module.exports = routes