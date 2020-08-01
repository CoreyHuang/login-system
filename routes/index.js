const express = require('express')
const router = express.Router()

const session = require('./modules/session.js')
const home = require('./modules/home.js')
const user = require('./modules/user.js')

router.use(session)
router.use('/', home)
router.use('/user', user)


module.exports = router