const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/index.js')
const bodyParser = require('body-parser')
const login = require('./models/login.js')
const session = require('express-session')
require('./config/mongoose.js')

const app = express()
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(3000, () => { console.log("Server is enable...") })
