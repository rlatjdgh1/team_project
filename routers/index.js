const express = require('express')
const router = express.Router()
const user = require('../models/user')
const {alertmove} = require('../util/alert')
const userRouter = require('./user')
const boardRouter = require('./board')

router.get('/',(req,res)=>{
    const {user} = req.session
    res.render('index',{
        user
    })
})

const login = (req,res,next)=>{
    let { user } = req.session
        if (user != undefined) {
            next()
        } else {
            res.send(alertmove('/','권한 없음'))
        }
    }

router.use('/user',userRouter)
router.use('/board',login,boardRouter)

module.exports = router
