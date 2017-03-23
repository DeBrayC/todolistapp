const express = require('express')
const app = express()
const path = require('path')
const db = require('./database/main')

app.set("view engine", "pug");

app.get('/', (request, response) => {
  response.render('index', {name: ''})
})

app.get('/completedtasks', (request, response) => {
  response.render('completedtasks')
})

app.get('/tasks', db.getAll);

app.use(express.static(path.join(__dirname , 'public')))

app.use((err, request, response) => {
  console.log(err);
  response.status(500).send('Something broke')
})
app.listen(3000)
