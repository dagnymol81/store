const Item = require('../models/item')
const seed = require('../models/seed')

const newItem = (req, res) => {
  res.render('New')
}

const createItem = (req, res) => {
    Item.create(req.body, (err, createdItem) => {
      if(err) {
        res.status(400).json(err)
      } else {
        res.status(200).redirect('/store')
      }
    })
}

const storeIndex = (req, res) => {
  Item.find({}, (err, foundItem) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).render('Index', { store: foundItem })
    }
  })
}

const showItem = (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).render('Show', {store: foundItem})
    }
  })
}

const deleteItem = (req, res) => {
  Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
    if(err) {
      res.status(400).json(err)
    } else {
      console.log('deleted ' + deletedItem)
      res.status(200).redirect('/store')
    }
  })
}

const editItem = (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    if (err) {
        res.status(400).json(err)
    } else {
        res.status(200).render('Edit', { item: foundItem })
    }
})
}

const updateItem = (req, res) => {
Item.findByIdAndUpdate(req.params.id, req.body, (err, foundItem) => {
  if (err) {
    res.status(400).json(err)
  } else {
    res.status(200).redirect('/store')
  }
})
}

const seedStarterData = (req, res) => {
  Item.deleteMany({}, (err, deletedItems) => {
      if (err) {
        res.status(400).json(err)
      } else {
          Item.create(seed.store, (err, createdItem) => {
              if (err) {
                res.status(400).json(err)
              } else {
                  console.log(createdItem)
                  res.status(200).redirect('/store')
                  console.log(createdItem)
              }
          })
      }
  })
}

module.exports = {
 newItem,
 createItem,
 storeIndex,
 showItem,
 deleteItem,
 editItem,
 updateItem,
 seedStarterData,
}