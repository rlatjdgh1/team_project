const express = require(`express`)
const nunjucks = require(`nunjucks`)
const app = express()
const router = require('./routers')
const PORT = process.env.PORT || 3000




app.set(`view engine`,`html`)
nunjucks.configure(`views`,{
    express:app,
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true,}))


app.use(router)


// board






app.listen(3000,()=>{
    console.log(`server start: ${PORT}`)
})

