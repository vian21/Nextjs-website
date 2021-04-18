export default(req,res)=>{
    const {id}= req.query;

    const mysql= require('mysql')
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'learning',
        socketPath:'/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock'
  
      });
    
      connection.connect();
          
      connection.query(`DELETE FROM students where id=${id}`, (error, result, fields) => {
        if(error) throw error
        res.send("ok")
      })
    
      connection.end()
}