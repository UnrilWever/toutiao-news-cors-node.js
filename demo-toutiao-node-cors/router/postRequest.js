const express = require('express')
const router = express.Router()
const postRequestHandler = require('../router-handler/postRequest')

router.post('*', postRequestHandler.postRequest)

module.exports = router
