const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

require('./config/mongoose.js')

const login = require('./models/login.js')

// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

const session = require('express-session')
app.use(session({
  secret: 'hello world', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 10 * 1000 },
  name: 'UID6',
  resave: true,
  saveUninitialized: true,
}));



app.listen(3000, () => { console.log("Server is enable...") })
//=======================================================================
app.get('/', (req, res) => {
  res.render('index', { status: req.session.status })
  console.log(req.session)
})


app.post('/', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.post('/user', (req, res) => {
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

app.get('/user', (req, res) => {
  login.find()
    .lean()
    .then(loginData => {
      status = loginData.find(data => data.email === req.session.email && data.password === req.session.password)
      if (!status) {
        req.session.status = "登入逾時，請重新登入"
        return res.redirect('/')
      }
      else {

        return res.render('user', { name: req.session.name })
      }
    })
    .catch(error => console.log(error))
})
