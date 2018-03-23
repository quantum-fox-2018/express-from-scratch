const express = require('express')
const routes = require('./routes')
var bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', routes)

app.listen(3000, () => {
  console.log('lets rock!')
})