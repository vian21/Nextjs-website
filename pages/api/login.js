export default (req, res) => {
    if (req.method == "POST") {
        const bcrypt = require('bcrypt');
        var cookie = require('cookie')
        var mysql = require('mysql');

        const data = req.body

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning',
            socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
        });

        connection.connect();
        connection.query(`SELECT * FROM USERS WHERE email='${data.email}'`, (error, results) => {
            if (error) throw error
            //console.log(results[0].password)
            bcrypt.compare(data.password, results[0].password, function (error, result) {
                // result == boolean
                if (!error) {
                    res.setHeader('Set-Cookie', cookie.serialize('userName', `${results[0].name}`, {
                        httpOnly: true,
                        sameSite: true,
                        maxAge: 60 * 60,
                        path: '/'

                    }))

                    res.send("ok")
                } else {
                    res.send("Wrong credentials!")
                }
            });
        })


    } else {
        res.send("sorry, we accept only POST request!")
    }

}