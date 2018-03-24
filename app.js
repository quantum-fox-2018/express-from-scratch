const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',routes)
app.set('view engine','ejs')

app.listen(3001, ()=>{
  console.log('App listening on port 3001');
})
