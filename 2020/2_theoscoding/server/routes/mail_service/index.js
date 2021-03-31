const express = require('express')
const router = express.Router()
const POST = require('../mail_service/post')

router.post('/mail/', POST.index)

module.exports = router