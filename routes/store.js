const express = require('express')
const router = express.Router()

const seed = require('../models/seed')

const { 
  newItem,
  createItem,
  storeIndex,
  showItem,
  deleteItem,
  editItem,
  updateItem,
  seedStarterData,
  showCredits, } = require('../controllers/store.js')

  //credits
router.get('/credits', showCredits)

//setup "new" route
router.get('/new', newItem)

//setup "create" route
router.post('/', createItem)

//setup index route
router.get('/', storeIndex)

//setup seed route
router.get('/seed', seedStarterData)

//show route
router.get('/:id', showItem)

//set up "delete" route
router.delete('/:id', deleteItem)

//setup "edit" route
router.get('/:id/edit', editItem)

//setup "put" route
router.put('/:id', updateItem)


module.exports = router