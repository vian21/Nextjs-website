export default (req, res) => {

    if(req.method=="POST"){
        
        const data = req.body
        const {id}= req.query

        const mysql= require('mysql');

        const connection= mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning',
            socketPath:'/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
        })

        connection.connect();

        connection.query(`UPDATE students SET name='${data.name}', grade='${data.grade}', gender=${data.gender}, DOB='${data.DOB}' WHERE id=${id}`,(error, results, fields)=>{
            res.send("ok")
            console.log(id)
        })

        connection.end();
    }else{
        res.send("At least send me some data :)")
    }
    
}