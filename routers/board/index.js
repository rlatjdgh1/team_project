const express = require('express')
const { list } = require('nunjucks/src/filters')
const router = express.Router()
const pool = require('../../db')


// router.get('/',(req,res)=>{
//     res.render('index')
// })

router.get('/list',(req,res)=>{
    pool.getConnection( (err,conn)=>{
        conn.query(`SELECT * FROM board`,(error,result)=>{
            res.render('board/list',{result})
        })
        conn.release();
    })
})

router.get('/update',(req,res)=>{
    res.render('board/update')
})
router.get('/view',(req,res)=>{
    pool.getConnection( (err,conn)=>{
        conn.query(`SELECT * FROM board`,(error,result)=>{
            res.render('board/view',{viewresult})
        })
        conn.release();
    })
})
router.get('/write',(req,res)=>{
    res.render('board/write')
})


router.post('/write',(req,res) =>{
    let { title,content } = req.body;
    pool.getConnection( (err,conn)=>{
        conn.query(`INSERT INTO board(title,content) VALUES('${title}','${content}')`,
        (error,result)=>{
            console.log(result)
            res.render('board/list',{result})
       })
       conn.release();
    })
});

module.exports = router