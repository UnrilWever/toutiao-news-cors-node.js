const express = require('express')
const router = express.Router()
const getRequestHandler = require('../router-handler/getRequest')

router.get('*', getRequestHandler.getRequest)

module.exports = router
