const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const mongoConfig = require('./config')
require('dotenv').config()
const port = process.env.PORT

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())
app.use(methodOverride("_method"))

app.listen(port, () => {
  console.log('listening on port: ' + port)
})

mongoConfig()

const { 
  newItem,
  createItem,
  storeIndex,
  showItem,
  deleteItem,
  editItem,
  updateItem,
  seedStarterData, } = require('./controllers/store.js')


//setup "new" route
app.get('/store/new', newItem)

//setup "create" route
app.post('/store', createItem)

//setup index route
app.get('/store', storeIndex)

//setup seed route
app.get('/store/seed', seedStarterData)

//show route
app.get('/store/:id', showItem)

//set up "delete" route
app.delete('/store/:id', deleteItem)

//setup "edit" route
app.get('/store/:id/edit', editItem)

//setup "put" route
app.put('/store/:id', updateItem)
