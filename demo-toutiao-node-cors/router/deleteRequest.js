const express = require('express')
const router = express.Router()
const deleteRequestHandler = require('../router-handler/deleteRequest')
router.delete('*', deleteRequestHandler.deleteRequest)

module.exports = router
