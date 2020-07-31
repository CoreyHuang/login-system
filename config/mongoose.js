const mongoose = require('mongoose')
// const login = require('../login.js')

mongoose.connect('mongodb://localhost/login', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => { console.log("mongoose connect error") })

db.once('open', () => {
  console.log("mongoose connect success")
})

module.exports = db