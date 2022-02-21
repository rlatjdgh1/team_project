const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const router = require('routers')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express:app,
})


app.get('/', (req ,res) => {
  res.send('main')
})

app.listen(3000, () => {
  console.log('server start')
})