export default (req, res) => {

    if (req.method == "POST") {

        const data = req.body

        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning',
            socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock' // not necesary! Only required for Unix Operating systems
        })

        connection.connect();

        connection.query(`INSERT INTO students(name, grade, gender, DOB) VALUES('${data.name}', '${data.grade}', ${data.gender}, '${data.DOB}')`, (error, results, fields) => {
            res.send("ok")
        })

        connection.end();
    } else {
        res.send("At least send me some data :)")
    }

}