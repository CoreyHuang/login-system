const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

require('./config/mongoose.js')

const login = require('./models/login.js')
const e = require('express')

app.listen(3000, () => { console.log("Server is enable...") })
//=======================================================================
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  login.find()
    .lean()
    .then(loginData => {      
      let status = loginData.find(data => data.email === email && data.password === password)
      if (status) return res.render('login', { name: status.firstName})
      else return res.redirect('/')
    })
    .catch(error => console.log(error))
})
