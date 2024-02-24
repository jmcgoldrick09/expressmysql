 // XAMPP
 const mysql  = require("mysql2");
 const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',      // this also could be root
     database: 'lab07',
     port: '3306' 
 });
 
 db.connect( (err)=> {
     if(err) throw err;
 });
 
 module.exports = db;
 