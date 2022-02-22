const express = require('express')
const router = express.Router()
const {alertmove} = require('../util/alert')
const userRouter = require('./user')
const boardRouter = require('./board')
const pool = require('../db')
const { getConnection } = require('../db')

/*
router.get('/list', (req, res)=>{
    if (req.session.userid != undefined) {
        pool.getConnection((err, conn)=>{
            conn.query(`SELECT num, username, level, date FROM user ORDER BY date ASC`, (error, result)=>{
                let list = result;
                res.render('admin/list', {list});
            });
            conn.release();
        });
    } else {
        res.send(alertmove('/admin', 'Login first.'));
    }
});
*/

router.get('/',(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query(`select userid from user`,(error,result)=>{
            let user = result
        })
        
        const {user} = req.session
        res.render('index',{
            user
        })
    })
    Conn.release()
})

const login = (req,res,next)=>{
    let { db } = req.session
        if ( db != undefined) {
            next()
        } else {
            res.send(alertmove('/','권한 없음'))
        }
    }

router.use('/user',userRouter)
router.use('/board',login,boardRouter)

module.exports = router
