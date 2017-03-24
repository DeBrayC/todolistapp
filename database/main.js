const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/todo';
const db = pgp(connectionString);
// const songs = (request, response, next) => {
//   db.any('select * from songs')
//     .then(data => {
//       response.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ALL songs'
//         })
//     })
// }
const getAll = (request, response) => {
  db.any('select * from tasks')
    .then(data => {
      response.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL tasks'
        })
    })
    .catch(err => {
      return (err);
    })
}
const getSongs = (request, response) => {
  db.any('select * from songs')
    .then(data => {
      response.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL songs'
        })
    })
    .catch(err => {
      return (err);
    })
}
module.exports = {
  getAll: getAll,
  getSongs: getSongs
}
