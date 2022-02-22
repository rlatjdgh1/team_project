const express = require('express')
const router = express.Router()
const boardController = require('./board.controller')

router.post('/write',boardController.writereq)


module.exports = router