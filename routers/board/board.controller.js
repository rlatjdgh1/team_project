const _borad = require("../../models/board")

const list = (req,res) => {
    res.render('board/list')
}
const write = (req,res) => {
    res.render('board/write')
}
const view = (req,res) => {
    res.render('board/view')
}

const writereq = (req,res)=>{
    let {subject,username,date} = req.body
    console.log(subject,username,date,_borad)
}
module.exports = { list,write,view,writereq }