const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars');
const port = 3000
const db = require('./resources/config/db')

//Connect database
db.connect();

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars(
  {
    extname:'.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})