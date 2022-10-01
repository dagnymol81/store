const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const mongoConfig = require('./config')
require('dotenv').config()
const port = process.env.PORT

const storeRoutes = require('./routes/store')

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())
app.use(methodOverride("_method"))
app.use('/store', storeRoutes)

app.listen(port, () => {
  console.log('listening on port: ' + port)
})

mongoConfig()


