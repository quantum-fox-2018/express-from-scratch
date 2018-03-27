const express = require('express');
let routes = express.Router();
let Models = require('../models');

routes.get('/', function(req,res) {
    Models.Subject.findAll({include: [{model: Models.Teacher}]})
    .then(subject => {
        let obj = {
            title: 'All Subjects Data',
            arrSubjects: subject
        }
        // res.send(subject);
        res.render('subject/sub_list.ejs',obj)
    })
})

routes.get('/add', function(req,res) {
    let obj = {
        title: 'Add Subject Data'
    }
    res.render('subject/sub_form.ejs',obj)
})

routes.post('/add', function(req,res) {
    let newData = req.body;
    // res.send(newData);
    
    Models.Subject.create(newData)
    .then(subject => {
        res.redirect('/subjects')
    })
    .catch(err => {
        console.log(err)
    })
})


routes.get('/edit/:id', function(req,res) {
    let id = req.params.id

    Models.Subject.findById(id)
    .then(subject => {
        let obj = {
            title: 'Edit Student Data',
            subject: subject
        }
        res.render('subject/sub_edit.ejs',obj)
    })

})


routes.post('/edit/:id', function(req,res) {
    let id = req.params.id
    let newData = req.body;

    Models.Subject.update(newData, {where: {id: id}})
    .then(subject => {
        res.redirect('/subjects');
    })
    .catch(err => {
        console.log(err);
    })
})


routes.get('/delete/:id', function(req,res) {
    let id = req.params.id;
    
    Models.Subject.destroy({where: {id: id}})
    .then(subject => {
        res.redirect('/subjects');
    })
    .catch(err => {
        console.log(err);
    })

})



module.exports = routes;