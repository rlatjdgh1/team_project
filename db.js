require('dotenv').config()
const mysql = require('mysql')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'aa22'
const password = process.env.DB_PASSWORD || 'aa22'
const database = process.env.DB_DATABASE || 'board'

const config = { host, user, password, database}
const pool = mysql.createPool(config)

pool.getConnection( (err,conn)=>{
    conn.query('select * from board',(error,result)=>{
        console.log(result)
    })
})



module.exports = pool