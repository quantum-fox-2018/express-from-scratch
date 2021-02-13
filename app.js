const express = require('express');
let app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes'))

app.locals.TeacherHelper = require('./helpers/teacherHelper');


app.listen(3000, () => {
    console.log('Server is listening on port #3000')
})
