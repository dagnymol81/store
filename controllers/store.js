const Item = require('../models/item')
const seed = require('../models/seed')


const showCredits = (req, res) => {
  res.status(200).render('Credits')
}

const newItem = (req, res) => {
  res.render('New')
}

const createItem = (req, res) => {
    Item.create(req.body, (err, createdItem) => {
      if(err) {
        res.status(400).json(err)
      } else {
        res.status(200).redirect('/products')
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
      res.status(200).redirect('/products')
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
Item.findByIdAndUpdate(req.params.id, (err, foundItem) => {
  if (err) {
    res.status(400).json(err)
  } else {
    res.status(200).redirect(`/products/${req.params.id}`)
  }
})
}

const buyItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 }  }, (err, foundItem) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).redirect(`/products/${req.params.id}`)
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
                  res.status(200).redirect('/products')
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
 showCredits,
 buyItem,
}