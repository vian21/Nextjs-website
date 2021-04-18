export default (req, res) => {
    if (req.method == "POST") {
        const bcrypt = require('bcrypt');
        const data = req.body
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning',
            socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
        });

        connection.connect();

        bcrypt.hash(data.password, 12, (error, hash) => {
            if (error) throw error
            connection.query(`INSERT INTO users(name,email,password,DOB) 
            VALUES('${data.name}','${data.email}','${hash}','${data.date}')`,
                (error, results, fields) => {
                    if (error) throw error
                    res.send("ok")

                })


        })
    } else {
        res.send("sorry, we accept only POST request!")
    }

}