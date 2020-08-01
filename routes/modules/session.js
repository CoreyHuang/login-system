const express = require('express')
const router = express.Router()
const session = require('express-session')

router.use(session({
  secret: 'hello world',
  cookie: { maxAge: 15 * 1000 },
  name: 'UID',
  resave: true,
  saveUninitialized: true,
}));

module.exports = router