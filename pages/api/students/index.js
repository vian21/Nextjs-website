
export default (req, res) => {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning',
    socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
  });

  connection.connect();

  connection.query("SELECT * FROM students", (error, results, fields) => {
    res.json(results)
  })

  connection.end()
}