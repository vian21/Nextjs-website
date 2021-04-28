export default (req, res) => {
    if (req.method == "POST") {

        //import bcrypt for verify the password sent to the hash in databse
        const bcrypt = require('bcrypt');

        var jwt = require('jsonwebtoken');

        var mysql = require('mysql');

        //the data sent by user
        /*
         * name : text
         * password : text
         */ 
        const data = req.body

        //mysql database config
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning',
            socketPath: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock' // not necesary! Only required for Unix Operating systems
        });

        //initiate connection
        connection.connect();

        //query
        connection.query(`SELECT * FROM USERS WHERE email='${data.email}'`, (error, results) => {
            if (error) throw error
            if (results.length !== 0) {

                bcrypt.compare(data.password, results[0].password, function (error, result) {

                    //construct user object which will be encoded into token
                    const user = JSON.stringify({
                        name: results[0].name,
                        email: results[0].email
                    })

                    if (!error) {

                        var token = jwt.sign(user, 'passKey123');

                        //send JSON web token to user
                        res.json({ token: token });

                    } else {
                        
                        //Failed to authenticate
                        res.json({ token: 'ko' });
                    }
                });

            } else {

                //No user account 
                res.json({ token: 'ko' });
            }

        })


    } else {

        //if someones tries to access the API though the browser
        res.send("sorry, we accept only POST request!")
    }

}