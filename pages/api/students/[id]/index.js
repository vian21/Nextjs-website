
export default (req, res) => {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning',
    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock' // not necesary! Only required for Unix Operating systems

  });

  connection.connect();

  const { id } = req.query

  connection.query(`SELECT * FROM students where id=${id}`, (error, result, fields) => {
    res.json(result)
  })

  connection.end()
}