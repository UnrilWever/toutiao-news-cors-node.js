const express = require('express')
const router = express.Router()
const putRequestHandler = require('../router-handler/putRequest')

router.put('*', putRequestHandler.putRequest)

module.exports = router
