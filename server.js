const express = require('express')
const app = express()
const path = require('path')
const db = require('./database/main')
const bodyParser = require('body-parser')


app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  db.getAllTasks()
    .then( tasks => {
    response.render('index', {tasks})
  })
})

app.get('/completedtasks', (request, response) => {
  response.render('completedtasks')
})

app.get('/songs', (request, response) => {
  db.getSongs()
    .then(songs => response.json(songs))
})

app.post('/addTask',(request, response) => {
  const {assignment, notes} = request.body
  db.addTask(assignment, notes)
    .then(task => response.redirect('/'))
})

app.patch('/updateTask/:id', (request, response) => {
  const { id } = request.params
  const {assignment, notes, iscomplete} = request.body
console.log(request.body)
  db.updateTask(id, assignment, notes, iscomplete)
  .then(task => response.send('You have updated yo ish!'))
})

app.delete('/deleteTask/:id', (request, response) => {
  const { id } = request.params
  db.deleteTask(id)
    .then(task => response.send('deleted!'))
})

app.use(express.static(path.join(__dirname , 'public')))

app.use((err, request, response) => {
  throw new Error('Something Broke Dumbass')
})

app.listen(3000)
