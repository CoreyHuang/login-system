const express = require('express')
const router = express.Router()
const login = require('../../models/login.js')

router.post('/', (req, res) => {
  const { email, password } = req.body
  login.find()
    .lean()
    .then(loginData => {
      let status = loginData.find(data => data.email === email && data.password === password)
      if (status) {
        req.session.name = status.firstName
        req.session.email = email
        req.session.password = password
        return res.redirect('/user')
      }
      else {
        req.session.status = "帳號/密碼錯誤，請重新輸入"
        return res.redirect('/')
      }
    })
    .catch(error => console.log(error))
})

router.get('/', (req, res) => {
  login.find()
    .lean()
    .then(loginData => {
      status = loginData.find(data => data.email === req.session.email && data.password === req.session.password)
      if (!status) {
        req.session.status = "登入逾時，請重新登入"
        return res.redirect('/')
      }
      else return res.render('user', { name: req.session.name })
    })
    .catch(error => console.log(error))
})

module.exports = router