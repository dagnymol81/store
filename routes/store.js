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
  showCredits,
  buyItem,
  deleteCart,
  showCart } = require('../controllers/store.js')

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

//new cart 
router.get('/delete-cart', deleteCart)

//show cart 
router.get('/cart', showCart)

//show route
router.get('/:id', showItem)

//set up "delete" route
router.delete('/:id', deleteItem)

//setup "edit" route
router.get('/:id/edit', editItem)

//buy
router.put('/:id/buy', buyItem)

//setup "put" route
router.put('/:id', updateItem)



module.exports = router