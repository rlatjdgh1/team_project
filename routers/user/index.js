const express = require('express')
const router = express.Router()
const {alertmove} = require('../../util/alert')
const user = require('../../models/user')
const db = require('../../user_db')


router.get('/login',(req,res)=>{
    res.render('user/login')
})
router.get('/register',(req,res)=>{
    res.render('user/register')
})
router.post('/register',(req,res,next)=>{
    console.log(req.body);
    const param = [req.body.userid,req.body.userpw,req.body.name,req.body.username,req.body.level,req.body.birth,req.body.gender,req.body.contact,req.body.phone]
    db.query('INSERT INTO user(`userid`,`userpw`,`name`,`username`,`level`,`birth`,`gender`,`contact`,`phone`) VALUES(?,?,?,?,?,?,?,?,?)',param,(err,row)=>{
        if(err) console.log(err);
    })
    res.redirect('/')
})

router.post('/login',(req,res)=>{
    let {userid,userpw} = req.body
    console.log(userid,userpw,user)
    let [item] = user.filter(v=> (v.userid==userid && v.userpw == userpw) )
    console.log(item)
    if (item != undefined) {
        req.session.user = { ...item  }  
        res.redirect('/')
    } else {
        res.send(alertmove('/user/login','아이디와 패스워드 불일치'))
    }
})

router.get('/profile',(req,res)=>{
    res.render('user/profile',{
        user:user
    })
})

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        req.session
    })

    res.send(alertmove('/','로그아웃 완료'))
})

module.exports = router