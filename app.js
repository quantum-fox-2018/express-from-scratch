'use strict'

const express = require('express');
const router = require('./routes/index');
let bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.use('/', router)

app.listen(3000, ()=> {
    console.log('Server sedang aktif..')
})