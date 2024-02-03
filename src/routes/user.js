const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.get('/register', userController.renderRegister)
router.get('/login', userController.renderLogin)

module.exports = router
