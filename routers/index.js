const express = require('express')
const router = express.Router()
const boardRouter = require('./board/index_get')

router.get(`/`,(req,res)=>{
    res.render('index')
})

router.post('/write',(req,res) =>{
    
})


router.use('/board',boardRouter)

module.exports = router;