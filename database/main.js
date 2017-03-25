const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/todo';
const db = pgp(connectionString);

const getAllTasks = () => {
  return db.any('select * from tasks')
}

const addTask = (assignment, notes) => {
  return db.none(`insert into tasks (assignment, notes) values ( '${assignment}', '${notes}')`)
}

const updateTask = (id, assignment, notes, iscomplete) => {
  return db.none(`UPDATE tasks SET assignment='${assignment}', notes='${notes}', iscomplete='${iscomplete}' WHERE id=${id}`)
}

const deleteTask = id => {
  return db.none(`DELETE FROM tasks WHERE id=${id}`)
}
const getSongs = () => {
  return db.any('select * from songs')
}
module.exports = {
  getAllTasks: getAllTasks,
  addTask: addTask,
  updateTask: updateTask,
  deleteTask: deleteTask,
  getSongs: getSongs
}
