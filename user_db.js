const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : 'ingoo3',
    password : 'Ingoo0427$',
    port : 3000,
    database : 'TEAM'
})

db.connect((err)=>{

    if (err) throw  err;
    
    console.log('connected');
    
    })

module.exports = db