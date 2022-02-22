const list = (req,res) => {
    res.render('board/list')
}
const write = (req,res) => {
    res.render('board/write')
}
const view = (req,res) => {
    res.render('board/view')
}


module.exports = { list,write,view }