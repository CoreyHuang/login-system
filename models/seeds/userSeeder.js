// const mongoose = require('mongoose')

const db = require('../../config/mongoose.js')
const login = require('../login.js')
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }]

// mongoose.connect('mongodb://localhost/login', { useNewUrlParser: true, useUnifiedTopology: true })

// const db = mongoose.connection

// db.on('error', () => { console.log("mongoose connect error") })

db.once('open', () => { 
  // console.log("mongoose connect success")
  users.forEach(data => login.create(data))
  console.log("mongoose done")
})