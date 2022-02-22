const express = require(`express`)
const nunjucks = require(`nunjucks`)
const session = require('express-session')
const Memorystore = require('memorystore')(session)
const _borad = require('./models/board')
const app = express()
const router = require('./routers')
const PORT = process.env.PORT || 3000




app.set(`view engine`,`html`)
nunjucks.configure(`views`,{
    express:app,
})
const maxAge = 5*60*1000
let sessionObj = {
    secret : "aa22",
    resave : false,
    saveUninitialzed: true,
    store: new Memorystore({ checkPeriod: maxAge}),
    cookie:{maxAge:maxAge} 
}

app.use(session(sessionObj))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true,}))


app.use(router)


// board

app.post('/board/write',(req,res)=>{
    let {subject,username,date} = req.body
    console.log(subject,username,date)
})




app.listen(3000,()=>{
    console.log(`server start: ${PORT}`)
})

